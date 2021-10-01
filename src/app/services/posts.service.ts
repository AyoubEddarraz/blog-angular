import { Post } from './../interfaces/post';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpConfigService } from './http-config.service';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient, private httpConfig: HttpConfigService) {}

  getPosts() {
    return this.http.get<Post[]>(`${environment.baseUrl}/posts` , {headers: this.httpConfig.httpHeaders });
  }

  getPost(id:number | undefined){
    return this.http.get(`${environment.baseUrl}/posts/${id}`,  {headers: this.httpConfig.httpHeaders });
  }

  addNewPost(post:Post){
    return this.http.post(`${environment.baseUrl}/posts` , post , {headers: this.httpConfig.httpHeaders});
  }

  updatePost(id:number, post:Post){
    return this.http.put(`${environment.baseUrl}/posts/${id}` , post , {headers: this.httpConfig.httpHeaders });
  }

  deletePost(id:number){
    return this.http.delete(`${environment.baseUrl}/posts/${id}` , {headers: this.httpConfig.httpHeaders});
  }

}
