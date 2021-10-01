import { TokenService } from './../services/token.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private token: TokenService) { }

  // handle the user loggedIn
  private loggedIn = new BehaviorSubject<boolean>(this.token.loggedIn());
  authStatus = this.loggedIn.asObservable();
  changeStatus = (value:boolean) => this.loggedIn.next(value);

  // handle the admin
  private admin = new BehaviorSubject<boolean>(false);
  adminStatus = this.admin.asObservable();
  changeAdminStatus= (value: boolean) => this.admin.next(value);


}
