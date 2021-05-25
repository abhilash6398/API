import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  postslist: any=[];
  originallist: any=[];
  userid: any=[];
  userslist: any=[];
  userId: any=0;

  constructor(private _usersService: UsersService) { }

  ngOnInit(): void {
    this._usersService.postslist().subscribe(result=>{
      this.postslist=result;
    })
    this._usersService.userslist().subscribe(result=>{
      this.userslist=result;
    })
  }

  getpostbyuserId(){
    this.postslist=this.originallist
    this.postslist=this.postslist.filter((x:any)=>x.userid==this.userId)
  }
}
