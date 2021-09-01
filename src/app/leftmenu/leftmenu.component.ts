import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {

  public user;
  public mainuser;
  public img:any;
  constructor(private router: Router) { }

  ngOnInit() {
    this.user = window.localStorage.getItem('userinfo');
    this.mainuser = JSON.parse(this.user);
    console.log(this.mainuser);
    this.img= this.mainuser.img;
    console.log(this.img);
  }
  onlodaut(){
    window.localStorage.clear();
    this.router.navigate(['/auth']);
  }
}
