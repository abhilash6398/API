import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  albumslist: any=[];

  constructor(private _usersService: UsersService) { }

  ngOnInit(): void {
    this._usersService.albumslist().subscribe(result=>{
      this.albumslist=result;
    })
  }

}
