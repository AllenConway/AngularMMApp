import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminCabinComponent } from './admin-cabin.component';
import { MatFormFieldModule, MatTableModule, MatCheckboxModule, MatDialogModule } from '@angular/material';

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
