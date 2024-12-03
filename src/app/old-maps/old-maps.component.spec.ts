import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OldMapsComponent } from './old-maps.component';

describe('OldMapsComponent', () => {
  let component: OldMapsComponent;
  let fixture: ComponentFixture<OldMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [OldMapsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OldMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
