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
}
