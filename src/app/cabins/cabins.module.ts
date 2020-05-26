import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CabinListComponent } from './cabin-list/cabin-list.component';
import { CabinDetailComponent } from './cabin-detail/cabin-detail.component';
import { CabinsRoutingModule } from './cabins-routing.module';
import { CabinsService } from './';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    CabinsRoutingModule
  ],
  declarations: [
    CabinDetailComponent,
    CabinListComponent,
  ],
  providers: [
    // CabinsService
  ]
})
export class CabinsModule { }
