import { Post } from './../../../interfaces/post';
import { PostsService } from './../../../services/posts.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  // post id
  id: number | undefined;
  // pst
  post:any;

  constructor(private posts: PostsService , private activeRouter: ActivatedRoute , private router: Router) {
    // id post in the route param
    let id = this.activeRouter.snapshot.paramMap.get("id");
    // check if the type of
    typeof(id) === 'string' ? this.id = parseInt(id) : this.router.navigateByUrl("/posts");
  }

  ngOnInit(): void {
    if(this.id){
      this.posts.getPost(this.id).subscribe(data => {
        console.log("data is from me" ,  data)
        this.post = data;
      }, (err) => {
        this.router.navigateByUrl("/posts");
      })
    }
  }

}
