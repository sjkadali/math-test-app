import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData = {
    email: '',
    password: ''    
  };

  token: any ;
 
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  onLogin() {    
    this.authService.loginUser(this.loginData).subscribe(
      (data: boolean) => {
        if (data) {
         this.router.navigate(['dashboard']);         
        }
       else {
         alert("Login failed");
       }
    }, error => {
      alert("Login failed");
    });
  }
}
