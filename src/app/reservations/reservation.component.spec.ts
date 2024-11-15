import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { ReservationComponent } from './reservation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';

describe('ReservationComponent', () => {
  let component: ReservationComponent;
  let fixture: ComponentFixture<ReservationComponent>;
  let snackBar: MatSnackBar;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        CommonModule,
        BrowserModule,
        FormsModule,
        MatSnackBarModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        BrowserAnimationsModule,
        ReservationComponent // Import the standalone component here
      ],
      providers: [
        { provide: MatSnackBar, useValue: { open: jasmine.createSpy('open') } }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ReservationComponent);
    component = fixture.componentInstance;
    snackBar = TestBed.inject(MatSnackBar);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  // it('should call snackBar.open with correct message on submit', () => {
  //   component.onSubmit();
  //   expect(snackBar.open).toHaveBeenCalledWith('Reservation Complete!', 'close');
  // });

  it('should set reservationDetails correctly on submit', () => {
    const checkinDate = new Date();
    const checkoutDate = new Date();
    component.reservationDetails = { id: 1, lastName: 'Doe', firstName: 'John', checkinDate, checkoutDate, cabinId: 1, occupancy: 2 };
    component.onSubmit();
    expect(component.reservationDetails).toEqual({ id: 1, lastName: 'Doe', firstName: 'John', checkinDate, checkoutDate, cabinId: 1, occupancy: 2 });
    expect(component.reservationDetails.checkinDate.getTime()).toEqual(checkinDate.getTime());
    expect(component.reservationDetails.checkoutDate.getTime()).toEqual(checkoutDate.getTime());
  });
});