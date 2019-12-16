import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  // template:'<div> <h1>{{title}}</h1></div> <div><h1>{{message}}</h1></div> <app-welcome></app-welcome> <app-login></app-login>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  message='Hello NarasimhaVerma Welcome to Full Stack Development';
}
