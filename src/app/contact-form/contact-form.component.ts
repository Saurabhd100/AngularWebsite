import { Component, OnInit } from '@angular/core';
import { Contact } from '../contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  contact = new Contact();
  constructor() { }

  ngOnInit() {
  }

  onSubmit(data: Contact): void {
    console.log(data);
  }

}
