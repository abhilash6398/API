import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postslist: any=[];

  constructor(private _usersService: UsersService) { }

  ngOnInit(): void {
    this._usersService.postslist().subscribe(result=>{
      this.postslist=result
    })
  }

}
