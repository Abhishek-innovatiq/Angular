import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  trigger,
  state,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  animations: [

    trigger('fade', [
      state('show', style({ opacity: 1 })),
      state('hide', style({ opacity: 0 })),
      transition('show <=> hide', animate('400ms ease-in-out'))
    ]),

    trigger('slide', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('500ms ease-out')
      ]),
      transition(':leave', [
        animate('400ms ease-in',
          style({ transform: 'translateX(100%)', opacity: 0 })
        )
      ])
    ]),

    trigger('zoom', [
      transition(':enter', [
        style({ transform: 'scale(0.5)', opacity: 0 }),
        animate('300ms ease-out',
          style({ transform: 'scale(1)', opacity: 1 })
        )
      ])
    ]),

    
  ]
})
export class App {

  isVisible = true;
  showCard = true;

  items = ['Angular', 'Animations', 'Fade', 'Slide'];

  toggleFade() {
    this.isVisible = !this.isVisible;
  }

  toggleCard() {
    this.showCard = !this.showCard;
  }

  addItem() {
    this.items.push('Item ' + (this.items.length + 1));
  }
}
