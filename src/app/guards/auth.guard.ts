import { TokenService } from './../services/token.service';
import { AccountService } from './../store/account.service';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private router: Router,
    private account : AccountService,
    private token: TokenService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot):  boolean  {


      if(!this.token.loggedIn()){
        this.account.changeStatus(false);
        this.token.removeToken();
        this.router.navigateByUrl("/login");

        return false;
      }

      return true;


  }

}
