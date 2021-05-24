import { UsersService } from './../services/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todolist: any=[];
  constructor(private _usersService: UsersService) { }

  ngOnInit(): void {
    this._usersService.todolist().subscribe((result: any) => {
      this.todolist=result;
    })
  }

}
