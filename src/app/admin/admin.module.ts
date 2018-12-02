import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatCheckboxModule,
  MatPaginatorModule,
  MatSortModule,
  MatTableModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule
} from '@angular/material';
import { AdminCabinComponent } from './admin-cabin/admin-cabin.component';
import { AdminCabinDetailComponent } from './admin-cabin-detail/admin-cabin-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminCabinComponent, AdminCabinDetailComponent],
  exports: [AdminCabinComponent, AdminCabinDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCheckboxModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule
  ],
  entryComponents: [AdminCabinDetailComponent] // Since this component is created dynamically as a dialog, add as an entryComponent
})
export class AdminModule { }
