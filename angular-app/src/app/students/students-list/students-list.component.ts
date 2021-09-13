import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Students } from '../../shared/students';

@Component({
  selector: 'app-students-list',
  templateUrl: './students-list.component.html',
  styleUrls: ['./students-list.component.css']
})
export class StudentsListComponent implements OnInit {

  students: any = [];

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void {
    this.getStudentsList();
  }

  getStudentsList() {
    return this.studentsService.getStudents().subscribe( (data: {}) => {
      console.log('data: ',data);
      this.students = data;
      console.log('students: ', this.students);
      //this.students = this.students.students;
      //console.log('students: ', this.students);
    });
  }

}
