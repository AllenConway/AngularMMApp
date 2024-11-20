import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanMatchFn, Route, UrlSegment } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminCabinComponent } from './admin/admin-cabin/admin-cabin.component';
import { AuthGuard } from './@core/auth/auth.guard';
import { CabinListComponent } from './cabins/cabin-list/cabin-list.component';
import { cabinsRoutes } from './cabins/cabins.routes';

const authFnGuard: CanMatchFn = (route: Route, segments: UrlSegment[]) => { 
  // logic to determine if route is authorized
  console.log(`AuthGuard canMatch called for /${route.path}`);
  return true;
}

// routes typically have (2) properties
// path = string for the URL
// component = which component to load when that route has been requested
export const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'dashboard'},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'cabins', children: cabinsRoutes, canLoad: [AuthGuard]},
  {path: 'admin-cabin', component: AdminCabinComponent, canMatch: [authFnGuard]},
  {path: 'activites', loadComponent: () => import('./activites/activites.component').then(m => m.ActivitesComponent)},
  {path: 'reservations', loadComponent: () => import('./reservations/reservation.component').then(m => m.ReservationComponent)},
  {path: 'specials', loadComponent: () => import('./specials/specials.component').then(m => m.SpecialsComponent)}
];


// Old non-standalone way, using ng Modules for routing
// @NgModule({
//   // Only call RouterModule.forRoot() in the root AppRoutingModule (or the AppModule if that's where you register top level application routes).
//   // In any other module, you must call the RouterModule.forChild method to register additional routes.
//   // Must indicate bindToComponentInputs: true to allow @Input() route params component binding
//   imports: [RouterModule.forRoot(routes, { bindToComponentInputs: true })],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
