import { Component, OnInit} from '@angular/core';
import { nameCard } from '../name_card';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css']
})
export class NameCardComponent implements OnInit {
	
  constructor() { }

  ngOnInit() {
  }
  card : nameCard = {
  	cardName: 'iacsisa jicajcia',
  	email: 'kdawiiwi@gmail.com',
  	phone: 39201931	
  };
}
