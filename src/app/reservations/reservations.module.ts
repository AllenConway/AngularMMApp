import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReservationsComponent } from './reservations.component';
import { ReservationsListComponent } from './reservations-list.component';

@NgModule({
  declarations: [ReservationsComponent, ReservationsListComponent],
  imports: [
    CommonModule
  ]
})
export class ReservationsModule { }
