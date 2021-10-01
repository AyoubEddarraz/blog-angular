import { MatSnackBar } from '@angular/material/snack-bar';
import { PostsService } from './../../services/posts.service';
import { Post } from './../../interfaces/post';
import { FormBuilder, Validators } from '@angular/forms';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-update-post',
  templateUrl: './dialog-update-post.component.html',
  styleUrls: ['./dialog-update-post.component.scss']
})
export class DialogUpdatePostComponent implements OnInit {

  constructor(
    private FB:FormBuilder,
    private dialogRef: MatDialogRef<DialogUpdatePostComponent> ,
    @Inject(MAT_DIALOG_DATA) public post: Post,
    private postsService: PostsService,
    private snackBar:MatSnackBar )
  {
    this.updatePostForm.patchValue(post);
  }

  ngOnInit(): void {
  }

  updatePostForm = this.FB.group({
    id: [null , [Validators.required]],
    title: ['' , [Validators.required]],
    article: ['' , [Validators.required]],
    imgArticle: ['' , [Validators.required]],
    author: ['' , [Validators.required]]
  })

  updatePost(){
    this.postsService.updatePost(this.updatePostForm.value.id , this.updatePostForm.value).subscribe(res => {} , (err) => {
      this.snackBar.open("post updated with success" , "hide", {
        duration: 2000
      } )
    });
  }

}
