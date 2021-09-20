import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { Users } from '../../shared/users';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  users: any = [];

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.getUsersList();
  }

  getUsersList() {
    return this.usersService.getUsers().subscribe( (data: {}) => {
      console.log('data: ',data);
      this.users = data;
      console.log('users: ', this.users);
      //this.users = this.users.users;
      //console.log('users: ', this.users);
    });
  }

}
