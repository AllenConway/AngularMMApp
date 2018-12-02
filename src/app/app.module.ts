import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminModule } from './admin/admin.module';
import { CabinsModule } from './cabins/cabins.module';
import { ReservationsModule } from './reservations/reservations.module';
import { HttpClientModule } from '@angular/common/http';
import { MatButtonModule, MatMenuModule } from '@angular/material';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    AppRoutingModule, // allows router-outlet directive to be avalaibale
    BrowserAnimationsModule, // required for Angular Material controls
    BrowserModule,
    AdminModule,
    CabinsModule,  // newly added feature module
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    ReservationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
