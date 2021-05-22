import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  userslist: any=[];
  originallist: any=[];

  constructor(private _usersService: UsersService) { }

  ngOnInit():void{
    this._usersService.userslist().subscribe( (result: any) => {
      this.userslist=result;
      this.originallist=result;
    })
  }

}
