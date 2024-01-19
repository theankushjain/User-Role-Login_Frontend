import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { UsersService } from 'src/app/services/users.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ExportService } from 'src/app/services/export.service';
// import { CoreService } from './core/core.service';


@Component({
  selector: 'app-employeemanage',
  templateUrl: './employeemanage.component.html',
  styleUrls: ['./employeemanage.component.scss']
})
export class EmployeemanageComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'role',
    'action'
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(
    private _dialog: MatDialog,
    private usersService: UsersService,
    private exportService: ExportService
    // private _coreService: CoreService
  ) { }

  ngOnInit(): void {
    this.getUsers();
  }

  exportToExcel(): void {
    this.exportService.exportToExcel(this.dataSource.data, 'Users_Data', 'Sheet1');
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(RegisterComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getUsers();
        }
      },
    });
  }

  openEditEmpForm(data: any) {
    const dialogRef = this._dialog.open(RegisterComponent, {
      data,
    })
  }

  deleteEmployee(id: number) {
    this.usersService.deleteUser(id).subscribe({
      next: (response: any) => {
        alert(response);
        location.reload();
      },
      error: (error) => {
        console.error('Error during user deletion:', error);
        alert("Error during user Deletion.")
      }
    })
  }

  getUsers() {
    this.usersService.getUser().subscribe(
      (response: any) => {
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.sort = this.sort;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }

    // Custom filter for the 'role' column that maps roles and converts it to string
    this.dataSource.filterPredicate = (data: any, filter: string) => {
      const roles = JSON.stringify(data.roles.map((role: { name: string; }) => role.name.toLowerCase()));
      return roles.includes(filter);
    };
  }
}