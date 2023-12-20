import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { response } from 'express';
import { TodoObject } from './todolist';
import { NgForOf } from '@angular/common';

const api = 'http://localhost:3000'

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [NgForOf],
  templateUrl: './todolist.component.html',
  styles: ``
})
export class TodolistComponent implements OnInit {
  todoArray: TodoObject[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get<TodoObject[]>(`${api}/todos`).subscribe(response => {
      this.todoArray = response;
      console.log(response)
    })
  }
}
