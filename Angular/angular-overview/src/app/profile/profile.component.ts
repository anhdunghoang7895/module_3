import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

name:string;
age: number;
email:string;
output:any;
showprofile(){
	return this.output = `name: ${this.name}  age:   ${this.age}   email:   ${this.email}`;
}

  constructor() { }

  ngOnInit() {
  }

}
