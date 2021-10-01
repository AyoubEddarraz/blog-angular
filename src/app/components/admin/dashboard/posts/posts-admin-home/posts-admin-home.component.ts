import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts-admin-home',
  templateUrl: './posts-admin-home.component.html',
  styleUrls: ['./posts-admin-home.component.scss']
})
export class PostsAdminHomeComponent implements OnInit {

  constructor() { }

  count:number = 0;

  ngOnInit(): void {
  }

}
