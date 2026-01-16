import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/tasks/task-list')
        .then(m => m.TaskList)
  }
];
