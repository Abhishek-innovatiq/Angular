import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],   // *ngFor ke liye
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App implements OnInit {

  users: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {

    this.http.get<any[]>('https://jsonplaceholder.typicode.com/users')
      .subscribe({
        next: (data) => {
          this.users = data;
           console.log(this.users);
         
        },
        error: (err) => {
          console.error('API Error', err);
         
        }
      });
  }
}
