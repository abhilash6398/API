import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private _httpClient: HttpClient) {}

  public userslist(){
    return this._httpClient.get('https://jsonplaceholder.typicode.com/users');
  }

  public todolist(){
    return this._httpClient.get('https://jsonplaceholder.typicode.com/todos');
  }

  public postslist(){
    return this._httpClient.get('https://jsonplaceholder.typicode.com/posts');
  }

  public photoslist(){
    return this._httpClient.get('https://jsonplaceholder.typicode.com/photos');
  }

  public commentslist(){
    return this._httpClient.get('https://jsonplaceholder.typicode.com/comments');
  }

  public albumslist(){
    return this._httpClient.get('https://jsonplaceholder.typicode.com/albums');
  }


}
