import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Frontend';
  home: boolean = true;
  modeSwitch: boolean = false;

  constructor(public router: Router) {}

  switchMode(mode: boolean): void {
    this.home = false;
    this.modeSwitch = mode;
    if (mode) {
      this.router.navigate(['/admin-scenarios']);
    } else {
      this.router.navigate(['/prompting']);
    }
  }
}
