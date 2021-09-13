import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Students } from '../shared/students';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }

  getStudents(): Observable<Students> {
    return this.http.get<Students>('http://localhost:3000/students');
  }

  createStudent(student) {
    return this.http.post('http://localhost:3000/students', student);
  }
}
