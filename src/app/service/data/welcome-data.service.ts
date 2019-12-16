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
    //let authHeaderString=this.basicAuthHandler();
    //console.log(authHeaderString)
    //let headers = new HttpHeaders({Authorization: authHeaderString});
    //   {
    //   'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    // });
   // headers.set('Authorization', 'authHeaderString');
    //headers.set('Access-Control-Allow-Origin','http://127.0.0.1:8080')
  //  console.log(headers)
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
