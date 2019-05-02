import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCabinDetailComponent } from './admin-cabin-detail.component';
import { MatFormFieldModule, MatDialogModule, MatTableModule, MatDialogRef } from '@angular/material';
import { FormsModule } from '@angular/forms';

describe('AdminCabinDetailComponent', () => {
  let component: AdminCabinDetailComponent;
  let fixture: ComponentFixture<AdminCabinDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatDialogModule,
        MatDialogRef,
        MatFormFieldModule,
        MatTableModule
      ],
      declarations: [ AdminCabinDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCabinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  xit('should create', () => {
    expect(component).toBeTruthy();
  });
});
