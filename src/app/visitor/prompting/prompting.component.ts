import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';
import {PromptingService} from '../../services/prompting.service';

@Component({
  selector: 'app-prompting',
  standalone: false,
  templateUrl: './prompting.component.html',
  styleUrl: './prompting.component.css'
})
export class PromptingComponent implements OnInit {
  userPrompt: string = '';
  inputText: string = '';

  zoomLevel = 100;
  maxZoom = 400;
  minZoom = 100;
  isDragging = false;
  pos = { top: 0, left: 0, x: 0, y: 0 };

  @ViewChild('container', { static: true }) container!: ElementRef;
  @ViewChild('img', { static: true }) img!: ElementRef;

  constructor(public promptingService: PromptingService) {}

  ngOnInit(): void {}

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


  //TODO: for draw feature?
  onContextMenu(event: MouseEvent): void {
    event.preventDefault(); // Suppress right-click menu
  }

  onImageClick(): void {
    const containerEl = this.container.nativeElement;
    const imgEl = this.img.nativeElement;

    if (!this.isDragging) {
      if (this.zoomLevel > 100) {
        //this.zoomLevel = this.minZoom;
        //imgEl.style.width = '100%';
        //imgEl.style.cursor = 'zoom-in';

        //containerEl.scrollLeft = 0;
        //containerEl.scrollTop = 0;
      } else {
        this.zoomLevel = 300;
        imgEl.style.width = '300%';
        imgEl.style.cursor = 'grab';
      }
    }
  }

  adjustZoom(amount: number): void {
    const newZoom = this.zoomLevel + amount;
    if (newZoom >= this.minZoom && newZoom <= this.maxZoom) {
      this.zoomLevel = newZoom;
      this.img.nativeElement.style.width = `${newZoom}%`;
      this.img.nativeElement.style.cursor = newZoom > 100 ? 'grab' : 'zoom-in';
    }
  }

  @HostListener('wheel', ['$event'])
  onScroll(event: WheelEvent): void {
    const containerEl = this.container.nativeElement;

    // Check if the cursor is over the container
    const rect = containerEl.getBoundingClientRect();
    const isOverImage =
      event.clientX >= rect.left &&
      event.clientX <= rect.right &&
      event.clientY >= rect.top &&
      event.clientY <= rect.bottom;

    if (isOverImage) {
      event.preventDefault();
      const zoomChange = event.deltaY < 0 ? 10 : -10; // Zoom in or out
      const newZoom = Math.min(Math.max(this.zoomLevel + zoomChange, this.minZoom), this.maxZoom);

      this.zoomLevel = newZoom;
      this.img.nativeElement.style.width = `${newZoom}%`;
      this.img.nativeElement.style.cursor = newZoom > 100 ? 'grab' : 'zoom-in';
    }
  }

  onMouseDown(event: MouseEvent): void {
    // Only proceed if the left mouse button (button 0) is pressed
    if (event.button !== 0 || this.zoomLevel === 100) return;

    this.isDragging = true; // Set dragging state to true
    const containerEl = this.container.nativeElement;

    this.pos = {
      left: containerEl.scrollLeft,
      top: containerEl.scrollTop,
      x: event.clientX,
      y: event.clientY,
    };

    containerEl.style.cursor = 'grabbing';
    containerEl.style.userSelect = 'none';

    event.preventDefault(); // Prevent default behavior
  }

  onMouseMove(event: MouseEvent): void {
    if (!this.isDragging || this.zoomLevel === 100) return; // Only move when dragging

    const containerEl = this.container.nativeElement;

    const dx = event.clientX - this.pos.x;
    const dy = event.clientY - this.pos.y;

    containerEl.scrollLeft = this.pos.left - dx;
    containerEl.scrollTop = this.pos.top - dy;
  }

  onMouseUp(): void {
    this.isDragging = false;
    const containerEl = this.container.nativeElement;

    containerEl.style.cursor = this.zoomLevel > 100 ? 'grab' : 'zoom-in';
  }

  onMouseLeave(): void {
    this.onMouseUp(); // Ensure dragging stops when leaving the container
  }
}
