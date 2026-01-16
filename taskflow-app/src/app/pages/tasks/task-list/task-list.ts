import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../../core/services/task.service';
import { PriorityPipe } from '../../../shared/pipes/priority.pipe';

type Priority = 'High' | 'Medium' | 'Low';

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, PriorityPipe],
  templateUrl: './task-list.html',
  styleUrl: './task-list.css'
})
export class TaskList {

  // 👇 pehle declare karo
  tasks: any;

  constructor(private taskService: TaskService) {
    // 👇 constructor ke andar initialize karo
    this.tasks = this.taskService.getTasks();
  }

  addTask(title: string, priority: string) {
    if (!title.trim()) return;

    const validPriority = priority as Priority;
    this.taskService.addTask(title, validPriority);
  }

  toggleTask(id: number) {
    this.taskService.toggleTask(id);
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }
}
