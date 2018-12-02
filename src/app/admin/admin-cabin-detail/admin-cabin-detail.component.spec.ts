import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCabinDetailComponent } from './admin-cabin-detail.component';

describe('AdminCabinDetailComponent', () => {
  let component: AdminCabinDetailComponent;
  let fixture: ComponentFixture<AdminCabinDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminCabinDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCabinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
