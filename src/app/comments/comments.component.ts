import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  commentslist: any=[];
  postslist: any=[];
  originallist: any=[];
  postid: any;
  postId: any=[];

  constructor(private _usersService: UsersService) { }

  ngOnInit(): void {
    this._usersService.commentslist().subscribe(result=>{
      this.commentslist=result;
    })
    this._usersService.postslist().subscribe(result=>{
      this.postslist=result;
      this.originallist=result;
    })
  }

  getcommentbypostId(){
    this.commentslist=this.originallist;
    this.commentslist=this.commentslist.filter((x:any)=>x.postId==this.postid);
  }
}
