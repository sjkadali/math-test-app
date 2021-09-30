import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
  userInfo: BehaviorSubject<any> = new BehaviorSubject(null);
  token ='';
  jwtHelper = new JwtHelperService();
  user =''  ;

  constructor( private httpClient: HttpClient, private router: Router) { }

  loginUser(loginData: { email: String; password: String; }): Observable<boolean> {
    return this.httpClient.post('http://localhost:3000/login', loginData)
    .pipe(
      map( (data: any) => {
        if (data) {
         localStorage.setItem("token",  data.token);
         const decryptedUser = this.jwtHelper.decodeToken(data.token);
         console.log('decryptd user: ', decryptedUser);

         const info = {
           token: data.token,
           username: decryptedUser.name,
           tokenExpiration: decryptedUser.exp
         };
         localStorage.setItem("user", info.username);
         this.userInfo.next(info);
         return true;
        }
        return false;
      }));
  }

  registerUser(userData: { firstName: String; 
    lastName: String; email: String; password: String; }) {
    return this.httpClient.post("http://localhost:3000/secure/users/", userData);
  }

  getUser(): string | void {
    if(localStorage.getItem("user") !== null) {
    this.user = localStorage.getItem("user")?.toString() || '';
    return this.user || 'no user';
    }
  }

  logoutUser() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('user');
    this.user ='';
    this.userInfo.next(null);
    this.router.navigate(['login']);
  }
}
