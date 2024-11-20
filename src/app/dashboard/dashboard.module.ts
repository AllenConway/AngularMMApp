import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatMenuModule,
    NgbModule,
  ]
})
export class DashboardModule { }
