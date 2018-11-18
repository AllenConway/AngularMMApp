import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CabinsComponent } from './cabins/cabins.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CabinDetailComponent } from './cabins/cabin-detail.component';

// routes typically have (2) properties
// path = string for the URL
// component = which component to load when that route has been requested
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'cabins', component: CabinsComponent},
  {path: 'detail/:id', component: CabinDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
