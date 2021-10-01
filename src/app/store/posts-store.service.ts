import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsStoreService {

  constructor() { }

  private countPosts = new BehaviorSubject<number>(0);
  countOfPosts = this.countPosts.asObservable();
  changeCountOfPosts = (count:number) => this.countPosts.next(count);

}
