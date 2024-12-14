import { Component } from '@angular/core';

@Component({
  selector: 'app-prompting',
  standalone: false,
  templateUrl: './prompting.component.html',
  styleUrl: './prompting.component.css'
})
export class PromptingComponent {
  userPrompt: string = '';
  inputText: string = '';

  updatePrompt(inputField: HTMLInputElement): void {
    if (this.inputText.trim()) {
      this.userPrompt = this.inputText.trim();
      this.inputText = '';
      inputField.value = '';
      console.log('Prompt Updated:', this.userPrompt);
    }
  }

  onInputChange(value: string): void {
    this.inputText = value;
  }
}
