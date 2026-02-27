import { Injectable } from '@angular/core';
import { Reservation } from './models/reservation';
import { RESERVATIONS } from './models/mock-reservations';

@Injectable({ providedIn: 'root' })
export class ReservationsService {

  private reservations: Reservation[] = RESERVATIONS;

  getReservations(): Reservation[] {
    return this.reservations;
  }

  getTodaysReservationCount(): number {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return this.reservations.filter(reservation => {
      const checkin = new Date(reservation.checkinDate);
      const checkout = new Date(reservation.checkoutDate);
      checkin.setHours(0, 0, 0, 0);
      checkout.setHours(0, 0, 0, 0);
      return checkin <= today && checkout >= today;
    }).length;
  }
}
