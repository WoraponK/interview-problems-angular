import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [],
  templateUrl: './todolist.component.html',
  styles: ``
})
export class TodolistComponent implements OnInit {
  todoArray = [];

  constructor() {}

  ngOnInit(): void {

  }
}
