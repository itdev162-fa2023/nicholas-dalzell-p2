import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Employee Database';
  EmployeeList: any;

  constructor() {

  }
  ngOnInit(): void {
    
  }
}
