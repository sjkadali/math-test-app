import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-users-create',
  templateUrl: './users-create.component.html',
  styleUrls: ['./users-create.component.css']
})
export class UsersCreateComponent implements OnInit {
  lname: String;
  fname: String;
  uname: String;
  password: String;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  onCreateUserSubmit(){
    const user = {
      lname: this.lname,
      fname: this.fname,
      uname: this.uname,
      password: this.password
    }
    if (user){
      this.usersService.signUpUser(user).subscribe(data => console.log(data));
    }
  }
    
}
