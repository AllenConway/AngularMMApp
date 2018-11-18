import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CabinsModule } from './cabins/cabins.module';
import { ReservationsModule } from './reservations/reservations.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    AppRoutingModule, // allows router-outlet directive to be avalaibale
    BrowserModule,
    CabinsModule,  // newly added feature module
    FormsModule,
    HttpClientModule,
    ReservationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
