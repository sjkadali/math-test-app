import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstName: String ='';
  lastName: String = '';
  email: String ='';
  password: String = '';

  constructor( private authService: AuthService) { }

  ngOnInit(): void {
  }

  onRegisterSubmit() {
    const user = {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      password: this.password
    }

    if (user) {
      this.authService.registerUser(user).subscribe(data => console.log("User registered successfully!"))
    }
  }

}
