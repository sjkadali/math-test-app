import { Component, OnInit } from '@angular/core';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  menuItems = [
    {linkId: 1, linkName: 'Home', link:''},
    {linkId: 2, linkName: 'PracticeTests', link: 'PracticeTests'}
  ];
  user ='';

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem("user") || '';   
  }

  ngDoCheck(){
    this.user = localStorage.getItem("user") || '';
  }

  logOut() {
    this.authService.logoutUser();
  }
}
