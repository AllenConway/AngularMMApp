import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CabinListComponent } from './cabin-list.component';
import { CabinsComponent } from './cabins.component';
import { CabinDetailComponent } from './cabin-detail.component';
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
    CabinsComponent
  ],
  providers: [
    CabinsService
  ]
})
export class CabinsModule { }
