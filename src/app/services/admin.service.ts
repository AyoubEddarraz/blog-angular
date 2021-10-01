import { AccountService } from './../store/account.service';
import { TokenService } from './token.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private token: TokenService, private accountService: AccountService) { }

  // check if the user Admin or not
  admin() {
    try {
      const payload = this.token.getInfos();
      // check if the user admin or not
      // GET THE DATA USER FROM THE payload
      const admin = payload.admin;

      if(admin) this.accountService.changeAdminStatus(true);

    } catch (err) {
      this.accountService.changeAdminStatus(false);
    }

  }

}
