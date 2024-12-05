import { Component } from '@angular/core';

@Component({
  selector: 'app-scenarios',
  standalone: false,

  templateUrl: './scenarios.component.html',
  styleUrl: './scenarios.component.css'
})
export class ScenariosComponent {
  scenarios = [
    {
      name: 'Scenario 1',
      description: 'This is the first scenario.',
      pic: 'img/map.png'
    },
    {
      name: 'Scenario 2',
      description: 'This is the second scenario.',
      pic: 'img/map.png'
    },
    {
      name: 'Scenario 3',
      description: 'This is the third scenario.',
      pic: 'img/map.png'
    },
    {
      name: 'Scenario 4',
      description: 'This is the fourth scenario.',
      pic: 'img/map.png'
    },
    {
      name: 'Scenario 5',
      description: 'This is the fifth scenario.',
      pic: 'img/map.png'
    }
    ]
}
