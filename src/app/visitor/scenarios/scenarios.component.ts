import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-scenarios',
  standalone: false,
  templateUrl: './scenarios.component.html',
  styleUrl: './scenarios.component.css'
})
export class ScenariosComponent implements OnInit {
  scenarios: any[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    // Initial loading of scenarios with translations
    this.loadScenarios();

    // Update scenarios when the language changes
    this.translate.onLangChange.subscribe(() => {
      this.loadScenarios();
    });
  }

  private loadScenarios(): void {
    this.scenarios = [
      {
        name: this.translate.instant('Szenario') + " 1",
        description: this.translate.instant('ScenarioText'),
        pic: 'img/map.png'
      },
      {
        name: this.translate.instant('Szenario') + " 2",
        description: this.translate.instant('ScenarioText'),
        pic: 'img/map.png'
      },
      {
        name: this.translate.instant('Szenario') + " 3",
        description: this.translate.instant('ScenarioText'),
        pic: 'img/map.png'
      },
      {
        name: this.translate.instant('Szenario') + " 4",
        description: this.translate.instant('ScenarioText'),
        pic: 'img/map.png'
      },
      {
        name: this.translate.instant('Szenario') + " 5",
        description: this.translate.instant('ScenarioText'),
        pic: 'img/map.png'
      }
    ];
  }
}
