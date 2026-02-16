import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard  {
  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    console.log(`AuthGuard canActivate called for ${state.url}`);
    if (this.authService.isAuthenticated()) {
      return true;
    }
    
    // Redirect to login page if not authenticated
    this.router.navigate(['/login']);
    return false;
  }

  // Decides if lazy loaded module can be accessed and will be loaded
  canLoad(route: Route): boolean {
    console.log(`AuthGuard canLoad called for /${route.path}`);
    if (this.authService.isAuthenticated()) {
      return true;
    }
    
    // Redirect to login page if not authenticated
    this.router.navigate(['/login']);
    return false;
  }

}
