import { Component, OnInit } from '@angular/core';
import { progress_bar }from '../progress-bar';
@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  color : progress_bar= {
  	backgroundColor1: '#d9d9d9',
  	progressColor: '#4CAF50',
  	width: 50
  };
}
