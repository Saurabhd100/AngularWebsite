import { Component, OnInit } from '@angular/core';
import { Special } from '../special';

@Component({
  selector: 'app-special',
  templateUrl: './special.component.html',
  styleUrls: ['./special.component.css']
})
export class SpecialComponent implements OnInit {
  constructor() { }

  special = [
    new Special('Lorem ipsum dolor','../assets/img/specials/1.jpg','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo.'),
    new Special('Consectetur adipiscing','../assets/img/specials/2.jpg','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo.'),
    new Special('Duis sed dapibus','../assets/img/specials/3.jpg','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam sed commodo.'),
  ];
  ngOnInit() {
  }

}
