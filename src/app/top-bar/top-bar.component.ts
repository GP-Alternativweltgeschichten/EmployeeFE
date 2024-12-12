import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-top-bar',
  standalone: false,
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.css'
})
export class TopBarComponent implements OnInit {
  @Output() modeSwitched = new EventEmitter<boolean>();
  modeSwitch: boolean = false;
  modeOptions: any[] | undefined;

  constructor(private translate: TranslateService) {
    // Default language
    this.translate.setDefaultLang('de');
  }

  ngOnInit(): void {
    this.setModeOptions();

    this.translate.onLangChange.subscribe(() => {
      this.setModeOptions();
    });
  }

  private setModeOptions(): void {
    this.modeOptions = [
      { label: this.translate.instant('Besucher'), value: false },
      { label: this.translate.instant('Admin'), value: true }];
  }

  switchLanguage(language: string): void {
    this.translate.use(language);
  }

  switchMode(): void {
    this.modeSwitched.emit(this.modeSwitch);
  }
}
