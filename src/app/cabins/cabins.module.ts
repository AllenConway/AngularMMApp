import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CabinListComponent } from './cabin-list/cabin-list.component';
import { CabinDetailComponent } from './cabin-detail/cabin-detail.component';
import { CabinsRoutingModule } from './cabins-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CabinsRoutingModule,
    NgOptimizedImage
  ],
  declarations: [
    CabinDetailComponent,
    CabinListComponent,
  ]
})
export class CabinsModule { }
