import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatButtonModule, MatMenuModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CabinsModule } from '../cabins/cabins.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CabinsModule,
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    NgbModule,
  ]
})
export class DashboardModule { }
