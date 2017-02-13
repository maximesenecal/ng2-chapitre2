import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {

  lastId: number = 0;
  todos: Todo[] = [];

  constructor() { }

  addTodo(todo: Todo): TodoDataService {
		if (!todo.id) {
			todo.id = ++this.lastId
		}
		this.todos.push(todo);
		return this;
	}
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter(
  			res => res.id !== id
  		);

  		return this;
  }

  updateTodoById(id: number, values: Object = {}): Todo {
    let todo = this.getTodoById(id);
		if (!todo) {
			return null;
		}
		return todo;
  }

  getTodoById(id: number): Todo {
    return this.todos
  			.filter(todo => todo.id === id) // Create a new array (copy) with the param
  			.pop(); // Return last item and delete it, don't worry, it's a copy
   }

  toogleTodoComplete(todo): Todo {
    todo.complete = !todo.complete;
    return todo;
  }


  getTodos(): Todo[] {
		return this.todos;
	}
}
