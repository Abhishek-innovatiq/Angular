import { Injectable, signal } from '@angular/core';
import { Task } from '../../shared/models/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks = signal<Task[]>([]);

  getTasks() {
    return this.tasks;
  }

  addTask(title: string, priority: 'High' | 'Medium' | 'Low') {
    const newTask: Task = {
      id: Date.now(),
      title,
      priority,
      completed: false
    };

    this.tasks.update(tasks => [...tasks, newTask]);
  }

  toggleTask(id: number) {
    this.tasks.update(tasks =>
      tasks.map(task =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  deleteTask(id: number) {
    this.tasks.update(tasks => tasks.filter(task => task.id !== id));
  }
}
