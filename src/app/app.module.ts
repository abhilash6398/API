import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users/users.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TodosComponent } from './todos/todos.component';
import { PostsComponent } from './posts/posts.component';
import { CommentsComponent } from './comments/comments.component';
import { AlbumsComponent } from './albums/albums.component';
import { PhotosComponent } from './photos/photos.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    TodosComponent,
    PostsComponent,
    CommentsComponent,
    AlbumsComponent,
    PhotosComponent
  ],
  imports: [
    // HttpClient,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path:'users',component:UsersComponent
      },
      {
        path:'todos',component:TodosComponent
      },
      {
        path:'posts',component:PostsComponent
      },
      {
        path:'photos',component:PhotosComponent
      },
      {
        path:'albums',component:AlbumsComponent
      },
      {
        path:'comments',component:CommentsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
