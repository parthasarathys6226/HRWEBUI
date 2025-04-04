import { Component } from '@angular/core';
import { AsidebarComponent } from '../Asidebar/asidebar/asidebar.component';

@Component({
  selector: 'app-dashboard',
  imports: [AsidebarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
