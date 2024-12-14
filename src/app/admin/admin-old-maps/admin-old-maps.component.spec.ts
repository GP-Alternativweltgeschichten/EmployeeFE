import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOldMapsComponent } from './admin-old-maps.component';

describe('AdminOldMapsComponent', () => {
  let component: AdminOldMapsComponent;
  let fixture: ComponentFixture<AdminOldMapsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AdminOldMapsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminOldMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
