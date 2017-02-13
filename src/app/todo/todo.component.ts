import { Component, OnInit } from '@angular/core';
import { Todo } from './todo';
import { TodoDataService } from './todo-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
  providers: [TodoDataService]
})
export class TodoComponent implements OnInit {

  newTodo:Todo = new Todo();

  constructor( private todoDataService: TodoDataService ) { }

  addTodo() {
    this.todoDataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }

  updateTodo(todo: Todo){
    this.todoDataService.updateTodoById(todo.id, todo);
  }
  deleteTodo(todo: Todo){
    this.todoDataService.deleteTodoById(todo.id);
  }

  getTodoById(id: number){
    this.todoDataService.getTodoById(id);
  }

  toggleTodoComplete(todo:Todo){
    this.todoDataService.toogleTodoComplete(todo)
  }

  get todos() {
    return this.todoDataService.getTodos();
  }

  ngOnInit() {
  }

}
