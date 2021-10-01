import { TokenService } from './../../../services/token.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router , private token: TokenService) { }

  ngOnInit(): void {
    // if(this.token.loggedIn()){
    //   this.router.navigateByUrl("/posts");
    // }
  }

}
