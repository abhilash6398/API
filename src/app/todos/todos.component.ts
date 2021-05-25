import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todolist: any=[];
  userslist: any=[];
  userId:any=[];
  originallist:any=[];
  userid: any=0;
  constructor(private _usersService: UsersService) { }

  ngOnInit(): void {
    this._usersService.todolist().subscribe(result => {
      this.todolist=result;
      this.originallist=this.todolist;
    })
    this._usersService.userslist().subscribe(result=>{
      this.userslist=result;
    })
  }

  gettodobyuserId(){
    this.todolist=this.originallist;
    this.todolist=this.todolist.filter((x:any)=>x.userId=this.userid);
  }





}
