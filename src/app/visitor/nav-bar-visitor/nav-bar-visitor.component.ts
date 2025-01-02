import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar-visitor',
  standalone: false,
  templateUrl: './nav-bar-visitor.component.html',
  styleUrl: './nav-bar-visitor.component.css'
})
export class NavBarVisitorComponent implements OnInit {
  navItems: MenuItem[] | undefined

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.setNavItems();

    this.translate.onLangChange.subscribe(() => {
      this.setNavItems();
    });
  }

  private setNavItems(): void {
    this.navItems = [
      { label: this.translate.instant('Modus'), icon: 'pi pi-desktop', items: [
        { label: this.translate.instant('Besucher'), icon: 'pi pi-user', routerLink: ['/prompting'] },
        { label: this.translate.instant('Mitarbeiter'), icon: 'pi pi-users', routerLink: ['/admin-scenarios']},
        ]},
      { label: this.translate.instant('Prompting'), icon: 'pi pi-map-marker', routerLink: ['/prompting'] },
      { label: this.translate.instant('Szenarien'), icon: 'pi pi-building-columns', routerLink: ['/scenarios'] },
      { label: this.translate.instant('Alte Karten'), icon: 'pi pi-map', routerLink: ['/old-maps'] }
    ];
  }

}
