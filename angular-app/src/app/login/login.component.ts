import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  uname: String;
  password: String;

  constructor( private usersService: UsersService) { }

  ngOnInit(): void {
  }

  onLoginSubmit() {
    const user = {
      uname : this.uname,
      password: this.password
    };
    if (user) {
      this.usersService.loginUser(user).subscribe((data) => console.log(data));
    }
  }

}
