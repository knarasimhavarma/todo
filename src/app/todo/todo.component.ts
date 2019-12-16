import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  message: string
  id: number
  data: Todo
  constructor(private todoService: TodoDataService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']
    this.data = new Todo(this.id, '', '', new Date(), false)
    if (this.id != -1) {
      this.todoService.retriveTodo(this.id).subscribe(
        data => this.data = data
      )
    }
  }



  updateTodo() {
    if (this.id == -1) {
        console.log(this.id)
        this.todoService.saveTodo(this.data).subscribe(
          data=>{console.log(data)
          this.router.navigate(['todo'])
          }
        )
    } else {
      console.log('else condition '+this.id)
      this.todoService.update(this.id, this.data).subscribe(
        data => {
          //console.log(data)
         // this.message = `Update of Todo ${this.id} successful!!!!`
          this.router.navigate(['todo'])
        }
      )
    }
  }
}
