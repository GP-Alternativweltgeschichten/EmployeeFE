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
      {label: 'Prompting', icon: 'pi pi-map-marker' ,routerLink: ['/prompting']},
      {label: 'Szenarios', icon: 'pi pi-building-columns' , routerLink: ['/scenarios']},
      {label: 'Alte Karten', icon: 'pi pi-map' , routerLink: ['/old-maps']}
    ]
  }
}
