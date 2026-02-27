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
import { ReservationsService } from './reservations.service';

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
        { provide: MatSnackBar, useValue: { open: jasmine.createSpy('open') } },
        ReservationsService
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

  it('should set todaysReservationCount on init', () => {
    const reservationsService = TestBed.inject(ReservationsService);
    spyOn(reservationsService, 'getTodaysReservationCount').and.returnValue(4);
    component.ngOnInit();
    expect(component.todaysReservationCount).toBe(4);
  });

  it('should display todaysReservationCount in the template', () => {
    const reservationsService = TestBed.inject(ReservationsService);
    const expectedCount = reservationsService.getTodaysReservationCount();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.reservation-count-value')?.textContent?.trim()).toBe(String(expectedCount));
  });
});