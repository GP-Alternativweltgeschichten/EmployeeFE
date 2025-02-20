import {Component, OnInit} from '@angular/core';
import {MenuItem} from 'primeng/api';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit{
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
      { label: this.translate.instant('Szenarien'), icon: 'pi pi-building-columns', routerLink: ['/scenarios'] },
      { label: this.translate.instant('Alte Karten'), icon: 'pi pi-map', routerLink: ['/old-maps'] },
      { label: this.translate.instant('KI'), icon: 'pi pi-chart-bar', routerLink: ['/ai-model'] }
    ];
  }
}
