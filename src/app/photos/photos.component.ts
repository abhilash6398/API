import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photoslist: any=[];

  constructor(private _usersService: UsersService) { }

  ngOnInit(): void {
    this._usersService.photoslist().subscribe(result=>{
      this.photoslist=result;
    })
  }

}
