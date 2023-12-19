import { Routes } from '@angular/router';

// Pages
import { TodolistComponent } from './pages/todolist/todolist.component';
import { EasyComponent } from './pages/easy/easy.component';
import { MediumComponent } from './pages/medium/medium.component';

export const routes: Routes = [
    { path: '', redirectTo: '/todo-list', pathMatch: 'full' },
    { path: 'todo-list', component: TodolistComponent },
    { path: 'easy', component: EasyComponent },
    { path: 'medium', component: MediumComponent },
    { path: '**', redirectTo: '/', pathMatch: 'full' },
];
