import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Route } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log('AuthGuard#canActivate called');
    return true; // return false to guard against accessing this route
  }

  // Decides if lazy loaded module can be accessed and will be loaded
  canLoad(route: Route): boolean {
    return true;
  }

}
