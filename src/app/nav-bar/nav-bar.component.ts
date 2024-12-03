import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-nav-bar',
  standalone: false,

  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {
  navItems: MenuItem[] | undefined

  ngOnInit(): void {
    this.navItems = [
      {label: 'Prompting', icon: 'pi pi-map-marker' ,routerLink: ['/Prompting']},
      {label: 'Scenarios', icon: 'pi pi-building-columns' , routerLink: ['/Scenarios']},
      {label: 'Old Maps', icon: 'pi pi-map' , routerLink: ['/Old-Maps']}
    ]
  }
}
