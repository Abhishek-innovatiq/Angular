import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  count = signal<number>(0);
  color = signal<string>('red');
  title_name = 'CounterApp';

  updateColor() {
    if (this.count() < 5) {
      this.color.set('green');
    } 
    else if (this.count() >= 5 && this.count() < 10) {
      this.color.set('blue');
    } 
    else {
      this.color.set('red');
    }
  }

  increment() {
    this.count.set(this.count() + 1);
    this.updateColor();
  }

  decrement() {
    if (this.count() > 0) {
      this.count.set(this.count() - 1);
      this.updateColor();
    }
  }

  reset() {
    this.count.set(0);
    this.color.set('red');
  }
}
