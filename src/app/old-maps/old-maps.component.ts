import { Component } from '@angular/core';

@Component({
  selector: 'app-old-maps',
  standalone: false,

  templateUrl: './old-maps.component.html',
  styleUrl: './old-maps.component.css'
})
export class OldMapsComponent {
  oldMaps = [
    {
      name: 'Map 1',
      description: 'This is the first map.',
      pic: 'img/old_map.png'
    },
    {
      name: 'Map 2',
      description: 'This is the second map.',
      pic: 'img/old_map.png'
    },
    {
      name: 'Map 3',
      description: 'This is the third map.',
      pic: 'img/old_map.png'
    },
    {
      name: 'Map 4',
      description: 'This is the fourth map.',
      pic: 'img/old_map.png'
    },
    {
      name: 'Map 5',
      description: 'This is the fifth map.',
      pic: 'img/old_map.png'
    }
  ]
}
