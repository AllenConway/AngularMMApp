import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCabinDetailComponent } from './admin-cabin-detail.component';
import { MatFormFieldModule, MatDialogModule, MatTableModule, MatDialogRef, MAT_DIALOG_DATA, MatInputModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('AdminCabinDetailComponent', () => {
  let component: AdminCabinDetailComponent;
  let fixture: ComponentFixture<AdminCabinDetailComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close')
  };

  beforeEach(async(() => {
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

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
