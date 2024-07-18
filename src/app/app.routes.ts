import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HeaderComponent } from './components/header/header.component';
import { EmployeelistComponent } from './components/employeelist/employeelist.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';

export const routes: Routes = [
  {path:'create-employee',component:EmployeeFormComponent},
  {path :'employee/:id', component: EmployeeFormComponent},
 {path :'employeelist', component: EmployeelistComponent},
 
 
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  //{path:'about', loadComponent:()=> import('./components/about/about.component').then(mod=>mod.AboutComponent)},
  {path:'', redirectTo:"/login", pathMatch:"full"},
  {path:'*', component: NotfoundComponent}
  
];
