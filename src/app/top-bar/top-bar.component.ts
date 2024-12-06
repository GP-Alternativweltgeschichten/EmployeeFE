import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-top-bar',
  standalone: false,
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent {
  //title: string = 'Stadtmuseum Olpe';

  constructor(private translate: TranslateService) {
    // Default language
    this.translate.setDefaultLang('de');
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
  }
}
