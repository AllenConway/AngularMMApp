import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Route, RouterStateSnapshot, UrlSegment } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard  {
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(`AuthGuard canActivate called for ${state.url}`);
    return true; // return false to guard against accessing this route
  }

  // Decides if lazy loaded module can be accessed and will be loaded
  canLoad(route: Route): boolean {
    console.log(`AuthGuard canLoad called for /${route.path}`);
    return true;
  }

}
