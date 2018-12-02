import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCabinComponent } from './admin-cabin.component';

describe('AdminCabinComponent', () => {
  let component: AdminCabinComponent;
  let fixture: ComponentFixture<AdminCabinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCabinComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCabinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
