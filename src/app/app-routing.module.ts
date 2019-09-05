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
  {path: 'cabins', loadChildren: () => import('./cabins/cabins.module').then(m => m.CabinsModule)},
  {path: 'admin-cabin', component: AdminCabinComponent}
];

@NgModule({
  // Only call RouterModule.forRoot() in the root AppRoutingModule (or the AppModule if that's where you register top level application routes).
  // In any other module, you must call the RouterModule.forChild method to register additional routes.
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
