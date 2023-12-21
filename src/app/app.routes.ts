import { Routes } from '@angular/router';

// Pages
import { TodolistComponent } from './pages/todolist/todolist.component';
import { WorksComponent } from './pages/works/works.component';

export const routes: Routes = [
    { path: '', redirectTo: '/todo-list', pathMatch: 'full' },
    { path: 'todo-list', component: TodolistComponent },
    { path: 'works', component: WorksComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];
