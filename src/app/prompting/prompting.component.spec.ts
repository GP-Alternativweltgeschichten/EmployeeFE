import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromptingComponent } from './prompting.component';

describe('PromptingComponent', () => {
  let component: PromptingComponent;
  let fixture: ComponentFixture<PromptingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PromptingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromptingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
