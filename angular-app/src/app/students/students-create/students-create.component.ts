import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-students-create',
  templateUrl: './students-create.component.html',
  styleUrls: ['./students-create.component.css']
})
export class StudentsCreateComponent implements OnInit {
  lname: String;
  fname: String;
  uname: String;
  password: String;

  constructor(private studentService: StudentsService) { }

  ngOnInit(): void {
  }

  onCreateStudentSubmit(){
    const student = {
      lname: this.lname,
      fname: this.fname,
      uname: this.uname,
      password: this.password
    }
    if (student){
      this.studentService.createStudent(student).subscribe(data => console.log(data));
    }
  }
    
}
