import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {

  institut = JSON.parse(localStorage.getItem('place'));
  programs = [];
  constructor() { }

  ngOnInit() {
    
  }

}
