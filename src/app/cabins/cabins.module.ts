import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CabinListComponent } from './cabin-list.component';
import { CabinsComponent } from './cabins.component';
import { CabinDetailComponent } from './cabin-detail.component';
import { CabinsService } from './cabins.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  declarations: [
    CabinDetailComponent,
    CabinListComponent,
    CabinsComponent
  ],
  providers: [
    CabinsService
  ]
})
export class CabinsModule { }
