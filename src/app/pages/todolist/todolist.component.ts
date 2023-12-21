import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TodoObject } from './todolist';
import { NgForOf, NgIf } from '@angular/common';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

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
    private fb: FormBuilder,
  ) {}

  ngOnInit(): void {
    this.http.get<TodoObject[]>(`${api}/todos`).subscribe(response => {
      this.todoArray = response;
    })
  }

  refresh() {
    this.ngOnInit();
  }

  onSubmit() {
    const task_title = this.taskForm.value.inputTask;
    console.log(task_title)
  
    if (!task_title) {
      alert('Please enter a task');
      return;
    }
  
    this.http.post<TodoObject>(`${api}/todos`, { task_title })
      .subscribe(
        response => {
          this.todoArray.push(response);
          this.taskForm.reset();
          this.refresh();
        },
        error => {
          console.error('Error adding task:', error);
          alert('Failed to add task. Please try again.');
        }
      );
  }

  updateTask(todo: TodoObject) {
    const task_complete = !todo.task_complete;
  
    this.http.put<TodoObject>(`${api}/todos/${todo.id}`, { task_complete })
      .subscribe(
        response => {
          const updatedIndex = this.todoArray.findIndex(t => t.id === todo.id);
          this.todoArray[updatedIndex] = response;

          this.refresh();
        },
        error => {
          console.error('Error updating task:', error);
          alert('Failed to update task. Please try again.');
        }
      );
  }

  deleteTask(todo: TodoObject) {
    if (confirm('Are you sure you want to delete this task?')) {
      this.http.delete<void>(`${api}/todos/${todo.id}`)
        .subscribe(
          () => {
            const deletedIndex = this.todoArray.findIndex(t => t.id === todo.id);
            this.todoArray.splice(deletedIndex, 1);

            this.refresh();
          },
          error => {
            console.error('Error deleting task:', error);
            alert('Failed to delete task. Please try again.');
          }
        );
    }
  }
  
}
