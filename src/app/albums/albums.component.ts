import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albumslist: any=[];
  originallist: any=[];
  userslist: any=[];
  userId: any;
  userid: any=0;

  constructor(private _usersService: UsersService) { }

  ngOnInit(): void {
    this._usersService.albumslist().subscribe(result=>{
      this.albumslist=result;
      this.originallist=result;
    })
    this._usersService.userslist().subscribe(result=>{
      this.userslist=result;
    })
  }

  getalbumbyuserId(){
    this.albumslist=this.originallist;
    this.albumslist=this.albumslist.filter((x:any)=>x.userId==this.userid)
  }

}
