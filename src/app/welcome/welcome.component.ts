import { Component, OnInit } from '@angular/core';
import { Logs } from 'selenium-webdriver';

import { ActivatedRoute } from '@angular/router';
import { WelcomeDataService } from '../service/data/welcome-data.service';

export class User {
  constructor(id: number, name: string, age: number, gender: string, city: string) {
  }
}
export class Authenticate{
  constructor(message:string){}
}
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user:User;
  authenticate:Authenticate;
  
  errorMsg:string=''
  message: string = 'Hello UI Developers ' + this.router.snapshot.params['name'];
  constructor(private router: ActivatedRoute, private service: WelcomeDataService) {
    const welcome: string = 'Welcome';
     
  }

  ngOnInit() {
    //console.log(this.router.snapshot.params['name']);
    //console.log(this.router.snapshot.params['name']);
  }
  getServiceWithPathVariable(){
    this.service.executeServiceWithPathVariable(this.message).subscribe(
      response=>this.handleResponse(response),
      error=>this.handleErrorResponse(error)
    );
  }
  getWelcomeMsg() {
    console.log(this.service.executeHelloWorldBeanService());
    this.service.executeHelloWorldBeanService().subscribe(
      response => this.handleResponse(response),
      error => this.handleErrorResponse(error)
    );
    console.log("last line of getWelcomeMsg method ")
  }
  handleErrorResponse(error) {
    
    this.errorMsg=error.error.message;
  }
  handleResponse(response) {
    this.user=response;
    console.log(this.user);
  }
}

