import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar-admin',
  templateUrl: './nav-bar-admin.component.html',
  styleUrl: './nav-bar-admin.component.css'
})
export class NavBarAdminComponent implements OnInit{
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
      { label: this.translate.instant('Szenarien'), icon: 'pi pi-building-columns', routerLink: ['/admin-scenarios'] },
      { label: this.translate.instant('Alte Karten'), icon: 'pi pi-map', routerLink: ['/admin-old-maps'] }
    ];
  }
}
