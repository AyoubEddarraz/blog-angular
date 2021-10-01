import { AdminService } from './services/admin.service';
import { TokenService } from './services/token.service';
import { Router } from '@angular/router';
import { AccountService } from './store/account.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private token: TokenService,
    private admin: AdminService,
    private router: Router,
    private account: AccountService)
    {
      // refresh admin method
      this.admin.admin();
    }

  loggedIn: any;
  isAdmin: any;


  ngOnInit() {
    this.account.authStatus.subscribe(authstatus => {
      this.loggedIn = authstatus;
    })
    this.account.adminStatus.subscribe(admin => {
      this.isAdmin = admin;
    })
  }

  // sidenav var control open and close
  @ViewChild('sidenav') sidenav: MatSidenav | undefined;

  openSideNav(){
    this.sidenav?.open();
  }

  logOut(){
    this.token.removeToken();
    this.account.changeStatus(false);
    this.admin.admin();
    this.router.navigateByUrl("/login");
  }

}
