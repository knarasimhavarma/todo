import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { WelcomeDataService } from './welcome-data.service';

import { API_URL } from 'src/app/app.constant';



@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  todo:Todo
  constructor(private http:HttpClient, private welService:WelcomeDataService) { }
  fetchAllTodos(username){

    return this.http.get<Todo[]>(`${API_URL}/todos/${username}/todos`);
  }
  deleteById(id:number){
    return this.http.delete(`${API_URL}/todos/${id}`);
  }
  retriveTodo(id){
    return this.http.get<Todo>(`${API_URL}/todos/user/${id}`);
  }
  update(id, data){
    return this.http.put(`${API_URL}/todos/user/${id}`,data);
  }
  saveTodo(data){
    console.log('todo data service post')
    return this.http.post(`${API_URL}/todos/user/save`, data)

  }
}
