import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CabinDetailComponent } from './cabin-detail/cabin-detail.component';
import { CabinListComponent } from './cabin-list/cabin-list.component';

const routes: Routes = [
  {
    path: '',
    component: CabinListComponent
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
