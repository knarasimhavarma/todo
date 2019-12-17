import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Authenticate } from 'src/app/welcome/welcome.component';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }
  authenticate(username, password) {
    // console.log("before "+this.isUserLoggedIn())
    if (username == "varma" && password == "varma") {
      sessionStorage.setItem("authenticaterUser", username);
      // console.log("after "+this.isUserLoggedIn())
      return true;
    }
    return false;
  }
  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticaterUser");
    return !(user === null)
  }
  loggedOut() {
    sessionStorage.removeItem("authenticaterUser");
  }
  executeBasicAuthenticateService(username, password) {
    console.log(username+' '+password)
    const basicAuthString = 'Basic ' + window.btoa(username + ':' + password);
    console.log(basicAuthString)
    let headers = new HttpHeaders({
      'Authorization': basicAuthString
      })
    return this.http.get<Authenticate>(`http://localhost:8080/basic/auth`, { headers }).pipe(
      map(
        data => {
          sessionStorage.setItem("authenticaterUser", username);
          return data;
        }
      )
    );
  }

}
