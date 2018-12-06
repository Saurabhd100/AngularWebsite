import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  testimonial = [
    { name: 'Test1', org: 'xyz1', designation: 'abc1', testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { name: 'Test2', org: 'xyz2', designation: 'abc2', testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { name: 'Test3', org: 'xyz3', designation: 'abc3', testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
    { name: 'Test4', org: 'xyz4', designation: 'abc4', testimonial: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.'},
  ];
}
