import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { PostsService } from './../../../../../services/posts.service';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-new-post',
  templateUrl: './add-new-post.component.html',
  styleUrls: ['./add-new-post.component.scss']
})
export class AddNewPostComponent implements OnInit {

  constructor(private FB:FormBuilder, private postsService:PostsService, private router:Router, private snackBar: MatSnackBar ) { }

  ngOnInit(): void {
  }

  // form of new post
  // author automaticaly insert with the name of current user admin
  author: string = 'ayoub eddarraz';

  newPostForm = this.FB.group({
    title: ['' , [Validators.required]],
    article: ['' , [Validators.required]],
    imgArticle: ['' , [Validators.required]],
    author: [this.author , [Validators.required]]
  })

  addNewPost(){
    this.postsService.addNewPost(this.newPostForm.value).subscribe( () => {} , (err:Error) => {
      this.router.navigateByUrl('/postAdmin/all');
      this.snackBar.open("post added with success" , "hide", {
        duration: 2000
      });
    });
  }

}
