import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarVisitorComponent } from './nav-bar-visitor.component';

describe('NavBarComponent', () => {
  let component: NavBarVisitorComponent;
  let fixture: ComponentFixture<NavBarVisitorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavBarVisitorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavBarVisitorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
