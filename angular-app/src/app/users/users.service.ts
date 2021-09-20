import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Users } from '../shared/users';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  getTests(): Observable<Users>{
    return this.http.get<Users>('http://localhost:3000/secure/users');
  }

  constructor(private http: HttpClient) { }

  getUsers(): Observable<Users> {
    return this.http.get<Users>('http://localhost:3000/secure/users');
  }

  signUpUser(user) {
    return this.http.post('http://localhost:3000/users', user);
  }

  loginUser(user) {
    return this.http.post('http://localhost:3000/secure/login', user);
  }
}
