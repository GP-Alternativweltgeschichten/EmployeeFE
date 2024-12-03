import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropmptingComponent } from './propmpting.component';

describe('PropmptingComponent', () => {
  let component: PropmptingComponent;
  let fixture: ComponentFixture<PropmptingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PropmptingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PropmptingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
