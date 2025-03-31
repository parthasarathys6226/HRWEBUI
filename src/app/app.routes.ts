import { Routes } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { register } from 'module';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const routes: Routes = [
{
    path: '', redirectTo: 'register', pathMatch:"full"
},
{
    path: 'login', component: LoginComponent
},
{
    path: 'register', component: RegisterComponent
},
{
    path: 'dashboard', component: DashboardComponent
}

];
