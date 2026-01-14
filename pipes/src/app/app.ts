import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  today = new Date();
  name = 'Angular Pipes';
  price = 5000;
  progress = 0.75;
  message = 'Angular Pipes Example';

user = {
  name: 'Abhishek',
  age: 21,
  location: 'indore'
};



}
