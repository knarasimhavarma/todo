import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public targetDate: Date,
    public done: boolean
  ) { }
}

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})

export class ListTodosComponent implements OnInit {
  todos: Todo[]
  message: string
  id:number=0
  //  =[
  //    new Todo(101,"","Expert in Angular 7",new Date(), true),
  //    new Todo(102,"" ,"Expert in Java 8",new Date(), true),
  //    new Todo(103,"","Expert in DataStructures ",new Date(), false),
  //    new Todo(101, "","No 1 rank in HackerRank",new Date(), true)
  //  ];

  constructor(
    private todoService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodo();
  }
  refreshTodo() {
    this.todoService.fetchAllTodos('varma').subscribe(
      response => {
        console.log(response)
        this.todos = response
      }
    )
  }
  deleteTodo(id) {
    this.todoService.deleteById(id).subscribe(
      response => this.handleResponse(response, id),
      error => this.handleError(error)
    );
  }
  updateTodo(id) {
    this.router.navigate(['todos', id])
    this.message = `updateee of Todo ${id} successful!`;
  }
  addTodo(){
    this.router.navigate(['todos',-1])
  }
  handleResponse(response, id) {
    this.message = `Delete of Todo ${id} successful!`;
    this.refreshTodo();
  }
  handleError(error) {
    console.log(error)
  }
}
