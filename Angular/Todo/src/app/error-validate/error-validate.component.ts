import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-error-validate',
  templateUrl: './error-validate.component.html',
  styleUrls: ['./error-validate.component.css']
})
export class ErrorValidateComponent implements OnInit {
  @Input('control') control; 

  constructor() { }

  get message(){
    console.log(this.control);
    for (let err in this.control.errors){
      return this.getErrorMessage(err, this.control.error[err ]);
    }
    return null;
  }

  getErrorMessage(err, value){}

  ngOnInit() {
  }

}
