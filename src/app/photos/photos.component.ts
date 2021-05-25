import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  photoslist: any=[];
  albumslist: any=[];
  originallist: any=[];
  albumId: any;
  albumid: any;

  constructor(private _usersService: UsersService) { }

  ngOnInit(): void {
    this._usersService.photoslist().subscribe(result=>{
      this.photoslist=result;
    })
    this._usersService.albumslist().subscribe(result=>{
      this.albumslist=result;
    })
  }

  getphotobyalbumId(){
    this.photoslist=this.originallist;
    this.photoslist=this.photoslist.filter((x:any)=>x.albumId==this.albumid)
  }
}
