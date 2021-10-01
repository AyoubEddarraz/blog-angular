import { RouterModule, Routes } from '@angular/router';
import { MaterialUiModule } from './modules/material-ui.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule, routes } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from "@angular/common/http";
import { FormsModule , ReactiveFormsModule } from "@angular/forms";
import { HomeComponent } from './components/user/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsComponent } from './components/user/posts/posts.component';
import { PostComponent } from './components/user/post/post.component';
import { LoginComponent } from './components/user/login/login.component';
import { SingUpComponent } from './components/user/sing-up/sing-up.component';
import { PageNotFoundComponent } from './components/shared/page-not-found/page-not-found.component';
import { ShortArticlePipe } from './pipes/short-article.pipe';
import { NavListAdminComponent } from './components/admin/dashboard/nav-list-admin/nav-list-admin.component';
import { ListPostsComponent } from './components/admin/dashboard/posts/list-posts/list-posts.component';
import { AddNewPostComponent } from './components/admin/dashboard/posts/add-new-post/add-new-post.component';
import { PostsAdminHomeComponent } from './components/admin/dashboard/posts/posts-admin-home/posts-admin-home.component';
import { DialogUpdatePostComponent } from './dialogs/dialog-update-post/dialog-update-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PostsComponent,
    PostComponent,
    LoginComponent,
    SingUpComponent,
    PageNotFoundComponent,
    ShortArticlePipe,
    NavListAdminComponent,
    ListPostsComponent,
    AddNewPostComponent,
    PostsAdminHomeComponent,
    DialogUpdatePostComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialUiModule,
    BrowserAnimationsModule
  ],
  providers: [], // {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true} you can used or use the custom config class
  bootstrap: [AppComponent]
})
export class AppModule { }
