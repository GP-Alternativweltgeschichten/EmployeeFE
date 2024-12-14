import {Component, OnInit} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-old-maps',
  standalone: false,
  templateUrl: './old-maps.component.html',
  styleUrl: './old-maps.component.css'
})
export class OldMapsComponent implements OnInit {
  oldMaps: any[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    // Initial loading of maps with translations
    this.loadMaps();

    // Update maps when the language changes
    this.translate.onLangChange.subscribe(() => {
      this.loadMaps();
    });
  }

  private loadMaps(): void {
    this.oldMaps = [
      {
        name: this.translate.instant('Karte') + " 1",
        description: this.translate.instant('MapsText'),
        pic: 'img/old_map.png'
      },
      {
        name: this.translate.instant('Karte') + " 2",
        description: this.translate.instant('MapsText'),
        pic: 'img/old_map.png'
      },
      {
        name: this.translate.instant('Karte') + " 3",
        description: this.translate.instant('MapsText'),
        pic: 'img/old_map.png'
      },
      {
        name: this.translate.instant('Karte') + " 4",
        description: this.translate.instant('MapsText'),
        pic: 'img/old_map.png'
      },
      {
        name: this.translate.instant('Karte') + " 5",
        description: this.translate.instant('MapsText'),
        pic: 'img/old_map.png'
      }
    ];
  }
}
