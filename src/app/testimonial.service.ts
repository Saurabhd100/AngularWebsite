import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestimonialService {
  testArr: Contact[] = [];
  private testimonial: Contact[];
  private _testimonial = new BehaviorSubject<Contact[]>([]);
  public testimonial$ = this._testimonial.asObservable();
  constructor() { }

  addTestimonial(data) {
    this.testArr.push(data);
    this._testimonial.next(this.testArr);
  }
}
