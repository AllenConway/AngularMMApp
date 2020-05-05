import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { AdminCabinComponent } from './admin-cabin/admin-cabin.component';
import { AdminCabinDetailComponent } from './admin-cabin-detail/admin-cabin-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AdminCabinComponent, AdminCabinDetailComponent],
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
