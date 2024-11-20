import { Routes } from '@angular/router';
import { CabinDetailComponent } from './cabin-detail/cabin-detail.component';
import { CabinListComponent } from './cabin-list/cabin-list.component';

export const cabinsRoutes: Routes = [
  {
    path: '',
    component: CabinListComponent
  },
  {
    path: 'detail/:id',
    component: CabinDetailComponent
  }
];
