import { Component } from '@angular/core';

interface Todo {
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})

export class TodoListComponent {

  todos: Todo[] = [
    { title: 'Fare la spesa', completed: false },
    { title: 'Fare gli esercizi', completed: true },
    { title: 'Imparare Angular', completed: false },
  ];

  newTodo: string = '';

  addTodo() {
    if (this.newTodo.trim().length === 0) {
      return;
    }
    this.todos.push({ title: this.newTodo, completed: false });
    this.newTodo = '';
  }
}
