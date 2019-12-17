import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { User, Authenticate } from 'src/app/welcome/welcome.component';


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http: HttpClient) { }

  executeHelloWorldBeanService(): Observable<any> {
    // let authHeaderString=this.basicAuthHandler();
    // let headers = new HttpHeaders({Authorization: authHeaderString});
    return this.http.get<User[]>("http://localhost:8080/users/all");
    //console.log("Execute Hello World Bean Service");
  }
  executeServiceWithPathVariable(name) {
    return this.http.get<Authenticate>(`http://localhost:8080/basic/auth`);
  }

  // basicAuthHandler(){
  //   let username='user'
  //   let password='password'
  //   let basicAuthString='Basic '+ window.btoa( username+':'+ password)
  //  // console.log(basicAuthString)
  //   return basicAuthString;
  // }
}
