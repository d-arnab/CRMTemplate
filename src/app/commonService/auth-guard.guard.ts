import { Injectable } from '@angular/core';
import { ActivatedRoute,ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomAuthGuard implements CanActivate, CanActivateChild, CanLoad {
  constructor(private route: ActivatedRoute, private router: Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let urlPath = route.path
      console.log("testing::::", this.router.config)
      console.log("working::::::",urlPath);
      if((localStorage.getItem('isLogIn') != 'true') && (localStorage.getItem('isLogIn') == null)){
        this.router.navigate(['/login'],{ relativeTo: this.route })  
        return false
      }
    return true;
  }
}
