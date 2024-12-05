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
      pic: 'img/img.png'
    },
    {
      name: 'Scenario 2',
      description: 'This is the second scenario.',
      pic: 'img/img.png'
    },
    {
      name: 'Scenario 3',
      description: 'This is the third scenario.',
      pic: 'img/img.png'
    }
    ]
}
