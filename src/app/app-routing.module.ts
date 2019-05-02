import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminCabinComponent } from './admin/admin-cabin/admin-cabin.component';

// routes typically have (2) properties
// path = string for the URL
// component = which component to load when that route has been requested
const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'cabins', loadChildren: './cabins/cabins.module#CabinsModule'},
  {path: 'admin-cabin', component: AdminCabinComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
