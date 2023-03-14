import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Reservation } from './models/reservation';
import { FormsModule } from '@angular/forms';
import { Cabin } from '../cabins/models';
import { CABINS } from '../cabins/models/mock-cabins';

@Component({
  selector: 'app-reservation',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.scss']
})
export class ReservationComponent {
  private reservationDetails: Reservation;
  private cabins: Cabin[];
  private occupancy =  Array.from(Array(12).keys(), item => item + 1);

  ngOnInit() { 
    this.reservationDetails = { id: 0, lastName: '', firstName: '', checkinDate: null, checkoutDate: null, cabinId: 0, occupancy: 0 }
    this.cabins = CABINS;
  }

  onSubmit() { 
    const reservation = this.reservationDetails;
  }
}
