import { Routes } from '@angular/router';
import { LoginComponent } from './Login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AsidebarComponent } from './Asidebar/asidebar/asidebar.component';
import { DivisionComponent } from './Master/division/division.component';


export const routes: Routes = [
{
    path: '', redirectTo: 'login', pathMatch:"full"
},
{
    path: 'login', component: LoginComponent
},
{
    path: 'register', component: RegisterComponent
},
{
    path: 'dashboard', component: DashboardComponent
},
{
    path: 'asidebar', component: AsidebarComponent
},
{
    path: 'division', component: DivisionComponent
}

];
