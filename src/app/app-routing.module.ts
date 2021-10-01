import { ListPostsComponent } from './components/admin/dashboard/posts/list-posts/list-posts.component';
import { AddNewPostComponent } from './components/admin/dashboard/posts/add-new-post/add-new-post.component';
import { PostsAdminHomeComponent } from './components/admin/dashboard/posts/posts-admin-home/posts-admin-home.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { AfterLoginGuard } from './guards/after-login.guard';
import { LoginComponent } from './components/user/login/login.component';
import { HomeComponent } from './components/user/home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './components/user/posts/posts.component';
import { PostComponent } from './components/user/post/post.component';
import { SingUpComponent } from './components/user/sing-up/sing-up.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: "" , component: HomeComponent },
  { path: "home" , redirectTo: "" , pathMatch: "full"},
  { path: "posts" , component: PostsComponent , canActivate: [AuthGuard]},
  { path: "post/:id" , component: PostComponent , canActivate: [AuthGuard]},
  { path: "login" , component: LoginComponent , canActivate: [AfterLoginGuard]},
  { path: "singUp" , component: SingUpComponent , canActivate: [AfterLoginGuard]},
  { path: "postAdmin",  component: PostsAdminHomeComponent , children: [
    { path: "add" , component: AddNewPostComponent},
    { path: "all" , component: ListPostsComponent}
  ]},
  { path: "**" , component:  PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
