import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

export class Authenticate {
  constructor(message: string) { }
}

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }
  isUserLoggedIn() {
    let user = sessionStorage.getItem("authenticaterUser");
    return !(user === null)
  }
  getAuthUser() {
    //console.log('getAuthUser()')
    return sessionStorage.getItem('authenticaterUser')
  }
  getAuthToken() {
      //console.log('getAuthToken()')
    if (this.getAuthUser())
      return sessionStorage.getItem('token')
  }
  loggedOut() {
    sessionStorage.removeItem("authenticaterUser");
    sessionStorage.removeItem('token')
  }
  basicAuthentication(username, password) {
    let basicAuthString = 'Basic ' + window.btoa(username + ':' + password);
    console.log(basicAuthString + " " + username + " " + password)
    let headers = new HttpHeaders({
      'Authorization': basicAuthString
    });
    return this.http.get<Authenticate>('http://localhost:8080/basic/auth', { headers }).pipe(
      map(
        data => {
          sessionStorage.setItem('authenticaterUser', username)
          sessionStorage.setItem('token', basicAuthString)
          console.log(this.getAuthToken() + ' method calls ' + this.getAuthUser())
          console.log(username + " " + basicAuthString)

          return data;
        }
      )
    )
  }
 
}
