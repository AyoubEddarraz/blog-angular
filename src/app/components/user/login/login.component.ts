import { AdminService } from './../../../services/admin.service';
import { AccountService } from './../../../store/account.service';
import { Router } from '@angular/router';
import { TokenService } from './../../../services/token.service';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private FB: FormBuilder,
    private authService: AuthService,
    private token: TokenService,
    private account: AccountService,
    private admin: AdminService,
    private router:Router) { }

  ngOnInit(): void {
  }

  emailOrPasswordIncorrect:boolean = false;

  loginForm = this.FB.group({
    email: ['' , Validators.required],
    password: ['' , Validators.required]
  })

  login() {
    console.log(this.loginForm.value);
    this.authService.login(this.loginForm.value).subscribe((res) => {
      this.token.handleToken(res);
      this.admin.admin();
      this.account.changeStatus(true);
      this.router.navigateByUrl("/posts");
      this.emailOrPasswordIncorrect = false;
    }, (err:Error) => {
      this.emailOrPasswordIncorrect = true;
    });

  }

}
