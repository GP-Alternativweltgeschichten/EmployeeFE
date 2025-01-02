import { Component } from '@angular/core';
import {PromptingService} from '../../services/prompting.service';

@Component({
  selector: 'app-prompting',
  standalone: false,
  templateUrl: './prompting.component.html',
  styleUrl: './prompting.component.css'
})
export class PromptingComponent {
  userPrompt: string = '';
  inputText: string = '';

  constructor(public promptingService: PromptingService) {
  }

  updatePrompt(inputField: HTMLInputElement): void {
    if (this.inputText.trim()) {
      this.userPrompt = this.inputText.trim();
      this.inputText = '';
      inputField.value = '';
      console.log('Prompt Updated:', this.userPrompt);
      this.promptingService.sendText(this.userPrompt)
    }
  }

  onInputChange(value: string): void {
    this.inputText = value;
  }
}
