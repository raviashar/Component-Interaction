import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { StudentListComponent } from './student-list/student-list.component';
import { ModuleWithProviders } from '@angular/compiler/src/core';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/Employee-list',
    pathMatch: 'full'
  },
  {
    path: 'Employee-list',
    component: EmployeeListComponent
  },
  {
    path: 'Student-list',
    component: StudentListComponent
  },
  {
    path: '**',
    redirectTo: '/Employee-list',
    pathMatch: 'full'
  }
];

export const AppRouting: ModuleWithProviders = RouterModule.forRoot(routes);
