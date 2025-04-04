import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-asidebar',
  imports: [RouterLink, CommonModule],
  templateUrl: './asidebar.component.html',
  styleUrl: './asidebar.component.scss'
})
export class AsidebarComponent {
  
  sidelistnames: SidebarItem[] = [
    {
      sidebarName: 'Dashboard',
      sidebarIcon: 'fas fa-home',
      route: '/dashboard'
    },
    {
      sidebarName: 'Masters',
      sidebarIcon: 'fas fa-cogs',
      children: [
        { sidebarName: 'Divison', sidebarIcon: 'fas fa-user', route: '/division' },
        { sidebarName: 'Department', sidebarIcon: 'fas fa-box', route: '/masters/products' },
        { sidebarName: 'Level', sidebarIcon: 'fas fa-box', route: '/masters/products' },
        { sidebarName: 'Position', sidebarIcon: 'fas fa-box', route: '/masters/products' }
      ]
    },
    {
      sidebarName: 'Transaction',
      sidebarIcon: 'fas fa-exchange-alt',
      children: [
        { sidebarName: 'New Hire', sidebarIcon: 'fas fa-user', route: '/masters/products' },
        { sidebarName: 'Promotion', sidebarIcon: 'fas fa-box', route: '/masters/products' },
        { sidebarName: 'PSA - Leave', sidebarIcon: 'fas fa-box', route: '/masters/products' },
        { sidebarName: 'Monthly Time Sheet', sidebarIcon: 'fas fa-box', route: '/masters/products' }
      ]
    }
  ];

  expandedIndex: number | null = null;

  toggleMenu(index: number): void {
    if (this.expandedIndex === index) {
      this.expandedIndex = null; // collapse if already expanded
    } else {
      this.expandedIndex = index;
    }
  }
  
}

export interface SidebarItem {
  sidebarName: string;
  sidebarIcon: string;
  route?: string;
  children?: SidebarItem[];
}
