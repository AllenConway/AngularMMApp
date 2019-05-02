import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CabinsComponent } from './cabins.component';
import { CabinDetailComponent } from './cabin-detail.component';

const routes: Routes = [
  {
    path: '',
    component: CabinsComponent
  },
  {
    path: 'detail/:id',
    component: CabinDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CabinsRoutingModule { }
