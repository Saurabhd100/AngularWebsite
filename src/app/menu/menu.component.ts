import { Component, OnInit } from '@angular/core';
import { Menu } from '../menu';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  menuCategory = [];
  menu = [
    { category: 'Breakfast & Starters', name: 'Tortellini Skewers', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.', price: 9},
    { category:'Breakfast & Starters', name: 'Fried Ravioli', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.', price: 7},
    { category:'Breakfast & Starters', name: 'Wild Mushroom Arancini', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.', price: 9},
    { category:'Breakfast & Starters', name: 'Mozzarella Sticks', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.', price: 10},

    { category:'Main Course', name: 'Roast Stuffed Chicken', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.', price: 18},
    { category:'Main Course', name: 'Chicken & Mushroom Pasta', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.', price: 20},
    { category:'Main Course', name: 'Beef Lasagne', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.', price: 14},
    { category:'Main Course', name: 'Chicken Goujons', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.', price: 19},

    { category:'Dinner', name: 'Sesame-Ginger Beef', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.', price: 15},
    { category:'Dinner', name: 'Crispy Fried Chicken', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.', price: 17},
    { category:'Dinner', name: 'Mongolian Shrimp & Broccoli', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.', price: 18},
    { category:'Dinner', name: 'Spicy Coconut Salmon', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.', price: 20},

    { category:'Desserts', name: 'Chocolate Mud Cake', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.', price: 11},
    { category:'Desserts', name: 'Bourbon-Pecan Tart', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.', price: 14},
    { category:'Desserts', name: 'Texas Sheet Cake', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.', price: 15},
    { category:'Desserts', name: 'Vanilla Cheesecake', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam.', price: 18},
  ];
  constructor() { }

  ngOnInit() {
    this.menuCategory = this.menu.map(item => item.category).
    filter((value, index, self) => self.indexOf(value) === index);
    console.log(this.menuCategory);
  }
}
