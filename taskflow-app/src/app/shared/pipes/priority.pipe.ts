import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'priorityColor',
  standalone: true
})
export class PriorityPipe implements PipeTransform {
  transform(value: string): string {
    switch (value) {
      case 'High':
        return 'red';
      case 'Medium':
        return 'orange';
      case 'Low':
        return 'green';
      default:
        return 'black';
    }
  }
}
