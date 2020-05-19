import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCabinComponent } from './admin-cabin.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTableModule } from '@angular/material/table';

describe('AdminCabinComponent', () => {
  let component: AdminCabinComponent;
  let fixture: ComponentFixture<AdminCabinComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatCheckboxModule,
        MatDialogModule,
        MatFormFieldModule,
        MatTableModule
      ],
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
