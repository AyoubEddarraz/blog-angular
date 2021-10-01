import { DialogUpdatePostComponent } from './../../../../../dialogs/dialog-update-post/dialog-update-post.component';
import { Post } from './../../../../../interfaces/post';
import { PostsService } from './../../../../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.scss']
})
export class ListPostsComponent implements OnInit {

  posts: Post[] = [];

  constructor(private postsService: PostsService, private dialog:MatDialog, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.postsService.getPosts().subscribe(posts => {
      this.posts = posts;
    })
  }

  updatePost(event:Event, post:Post , index:number) {
    event.stopPropagation();

    const dialogRef = this.dialog.open(DialogUpdatePostComponent , {
      width: '90%',
      height: 'auto',
      data: post
    })

    dialogRef.afterClosed().subscribe(newPost => {
      this.posts.splice(index , 1 , newPost);
    })
  }

  deletePost(event:Event , id:number, index:number) {
    event.stopPropagation();
    this.postsService.deletePost(id).subscribe(res => {
      this.posts.splice(index, 1);
      this.snackBar.open("post deleted with success" , "hide" , {
        duration: 2000
      })
    })
  }

}
