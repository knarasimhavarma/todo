import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { WelcomeDataService } from './welcome-data.service';


@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  todo:Todo
  constructor(private http:HttpClient, private welService:WelcomeDataService) { }
  fetchAllTodos(username){
    return this.http.get<Todo[]>(`http://localhost:8080/todos/${username}/todos`);
  }
  deleteById(id:number){
    return this.http.delete(`http://localhost:8080/todos/${id}`);
  }
  retriveTodo(id){
    return this.http.get<Todo>(`http://localhost:8080/todos/user/${id}`);
  }
  update(id, data){
    return this.http.put(`http://localhost:8080/todos/user/${id}`,data);
  }
  saveTodo(data){
    console.log('todo data service post')
    return this.http.post(`http://localhost:8080/todos/user/save`, data)
  }
}
