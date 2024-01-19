export const navbarData = [
    {
        routeLink: 'dashboard',
        icon: 'fal fa-home',
        label: 'Dashboard'
    },
    {
        routeLink: 'register',
        icon: 'fal fa-user-plus',
        label: 'Employee Management',
        items:[
            {
                routeLink: 'employee/manage',
                label: 'List All Employees'
            },
            {
                routeLink: 'register',
                label: 'Register New Employee'
            },
            {
                routeLink:'role/manage',
                label: 'Role Management'
            }
        ]
    },
    {
        routeLink: 'salary',
        icon:'fal fa-money',
        label:'Salary Management',
        items: [
            {
                routeLink: 'products/level1.1',
                label: 'Level 1.1',
                items: [
                    {
                        routeLink: 'products/level2.1',
                        label: 'Level 2.1',
                    },
                    {
                        routeLink: 'products/level2.2',
                        label: 'Level 2.2',
                        items: [
                            {
                                routeLink: 'products/level3.1',
                                label: 'Level 3.1'
                            },
                            {
                                routeLink: 'products/level3.2',
                                label: 'Level 3.2'
                            }
                        ]
                    }
                ]
            },
            {
                routeLink: 'products/level1.2',
                label: 'Level 1.2',
            }
        ]
    },
    {
        routeLink: 'roleassign',
        icon: 'fal fa-user-check',
        label: 'Assign Roles to Users',
        items:[
            {
                routeLink: 'roles/view',
                label: 'List Roles'
            },
            {
                routeLink: 'roles/create',
                label: 'Create Role'
            },
            {
                routeLink: 'roles/assign',
                label: 'Assign Role'
            }
        ]
    },
    {
        routeLink: 'rolepermissions',
        icon: 'fal fa-lock-open',
        label: 'Assign Permissions to Roles'
    },
    {
        routeLink: 'transfer',
        icon: 'fal fa-plane',
        label: 'Transfer Employees'
    },
    {
        routeLink: 'settings',
        icon: 'fal fa-cog',
        label: 'Settings',
        expanded: true,
    },
];