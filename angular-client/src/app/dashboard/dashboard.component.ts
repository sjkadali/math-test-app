import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  user ='';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user") || '';
    console.log(this.user, localStorage.getItem("user"));
  }

}
