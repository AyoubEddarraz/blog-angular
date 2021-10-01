import { Router } from '@angular/router';
import { AuthService } from './../../../services/auth.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {

  constructor(private FB: FormBuilder , private authService: AuthService, private router:Router) { }

  ngOnInit(): void {
  }

  singUpForm = this.FB.group({
    firstName: ['' , Validators.required],
    lastName: ['' , Validators.required],
    email: ['' , Validators.required],
    password: ['' , Validators.required],
    admin: [false , Validators.required],
  })

  singUp() {
    console.log(this.singUpForm.value);
    this.authService.SingUp(this.singUpForm.value).subscribe(res => {
      this.router.navigateByUrl("/login")
      console.log(res)
    });
  }

}
