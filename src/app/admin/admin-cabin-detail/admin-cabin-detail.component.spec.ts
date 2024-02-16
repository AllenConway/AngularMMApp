import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { AdminCabinDetailComponent } from './admin-cabin-detail.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AdminCabinDetailComponent', () => {
  let component: AdminCabinDetailComponent;
  let fixture: ComponentFixture<AdminCabinDetailComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        NoopAnimationsModule
      ],
      declarations: [ AdminCabinDetailComponent ],
      providers: [
        {provide: MatDialogRef, useValue: mockDialogRef},
        {provide: MAT_DIALOG_DATA, useValue: {} },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminCabinDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should close dialog on no click', () => {
    component.onNoClick();
    expect(mockDialogRef.close).toHaveBeenCalled();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
