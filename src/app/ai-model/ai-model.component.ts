import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {PromptingService} from '../services/prompting.service';
import {RadioButtonClickEvent} from 'primeng/radiobutton';

@Component({
  selector: 'app-ai-model',
  templateUrl: './ai-model.component.html',
  styleUrl: './ai-model.component.css'
})
export class AiModelComponent implements OnInit {
  selectedModel: number = 0; // Default for Olpe-AI
  modelOptions = [
    { label: 'Olpe AI', value: 0 },
    { label: 'ChatGPT', value: 1 }
  ];

  constructor(public translate: TranslateService, public promptingService: PromptingService) {
    translate.setDefaultLang('en');
  }

  ngOnInit() {
    this.promptingService.getAIModel().subscribe(model => {
      this.selectedModel = model;
    });
  }

  saveAIModel(event: RadioButtonClickEvent) {
    this.selectedModel = event.value;
    this.promptingService.saveAIModel(this.selectedModel).subscribe({
        next: (model) => {
          console.log('Model saved:', model)
        }
      }
    )
  }

}
