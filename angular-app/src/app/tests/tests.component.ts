import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users/users.service';

@Component({
  selector: 'app-tests',
  templateUrl: './tests.component.html',
  styleUrls: ['./tests.component.css']
})
export class TestsComponent implements OnInit {

  constructor( private usersService: UsersService) { }

  ngOnInit(): void {
    this.getTests();
  }

  getTests() {
    this.usersService.getTests().subscribe(data => console.log(data));
  }

}
