import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { TestimonialService } from '../testimonial.service';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
  styleUrls: ['./testimonial.component.css']
})
export class TestimonialComponent implements OnInit {
  constructor(private testimonialService: TestimonialService) { }
  testimonial = [];


  ngOnInit() {
    this.testimonialService.testimonial$.subscribe(data => {
      this.testimonial = [];
      this.testimonial.push(...data);
      console.log(this.testimonial);
    });
  }


}
