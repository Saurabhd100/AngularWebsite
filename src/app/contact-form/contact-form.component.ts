import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';
import { TestimonialService } from '../testimonial.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contact = new Contact();
  constructor(public testimonialService: TestimonialService) { }

  ngOnInit() {
  }

  onSubmit(data: Contact): void {
    this.testimonialService.addTestimonial(data);
    this.contact = new Contact();
  }

}
