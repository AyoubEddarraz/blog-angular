import { TokenService } from './../services/token.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginGuard implements CanActivate {

  constructor(private token : TokenService , private router: Router ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean {

    if(this.token.loggedIn()){
      this.router.navigateByUrl("/posts");
      return false;
    }

    return true;
  }

}
