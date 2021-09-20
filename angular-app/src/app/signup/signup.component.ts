import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  lname: String;
  fname: String;
  uname: String;
  password: String;

  constructor( private usersService: UsersService) { }

  ngOnInit(): void {
  }

  onSignUpSubmit(){
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
