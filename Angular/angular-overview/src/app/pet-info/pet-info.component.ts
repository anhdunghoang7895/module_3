import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pet-info',
  templateUrl: './pet-info.component.html',
  styleUrls: ['./pet-info.component.scss']
})
export class PetInfoComponent implements OnInit {
	petName = 'puppie';
    petImage = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';
    

    
  constructor() { }

  ngOnInit() {
  }

}
