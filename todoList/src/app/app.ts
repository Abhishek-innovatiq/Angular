import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  tasks = signal<Task[]>([
    { id: 0, title: 'team member', completed: false }
  ]);

  title = signal('');

  addTask() {
    if (this.title()) {
      this.tasks.update(tasks => [
        ...tasks,
        {
          id: tasks.length + 1,
          title: this.title(),
          completed: false
        }
      ]);

      this.title.set('');
    }
  }

  deleteTask(id: number) {
    this.tasks.update(tasks =>
      tasks.filter(task => task.id !== id)
    );
  }

  toggleComplete(id: number) {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }
}
