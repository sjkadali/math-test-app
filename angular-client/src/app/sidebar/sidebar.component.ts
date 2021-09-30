import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  status: boolean = true;
 
  constructor() { }

  ngOnInit(): void {
  }

  clickEvent() {
    this.status = !this.status;
  }

}
