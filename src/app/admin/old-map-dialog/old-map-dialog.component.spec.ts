import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldMapDialogComponent } from './old-map-dialog.component';

describe('OldMapDialogComponent', () => {
  let component: OldMapDialogComponent;
  let fixture: ComponentFixture<OldMapDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OldMapDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldMapDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
