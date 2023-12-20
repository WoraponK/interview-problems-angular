import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TodoObject } from './todolist';
import { NgForOf, NgIf } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

const api = 'http://localhost:3000'

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [NgForOf, NgIf, ReactiveFormsModule],
  templateUrl: './todolist.component.html',
  styles: ``
})
export class TodolistComponent implements OnInit {
  todoArray: TodoObject[] = [];

  taskForm = this.fb.group({
    inputTask: ['']
  });

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.http.get<TodoObject[]>(`${api}/todos`).subscribe(response => {
      this.todoArray = response;
      console.log(response)
    })
  }

  onSubmit() {
    const task_title = this.taskForm.value.inputTask;
    console.log(task_title)
  
    // 1. Validate the task input:
    if (!task_title) {
      // Display an error message to the user
      alert('Please enter a task');
      return;
    }
  
    // 2. Send a POST request to the API:
    this.http.post<TodoObject>(`${api}/todos`, { task_title })
      .subscribe(
        response => {
          // 3. Add the new task to the todoArray:
          this.todoArray.push(response);
          window.location.reload();
        },
        error => {
          // 6. Handle errors gracefully:
          console.error('Error adding task:', error);
          alert('Failed to add task. Please try again.');
        }
      );
  }
}
