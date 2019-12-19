import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { API_URL } from '../app.constant';

export class Authenticate {
  constructor(message: string) { }
}
export const TOKEN ='token'
export const AUTHENTICATE_USER='authenticaterUser'

@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http: HttpClient) { }
  isUserLoggedIn() {
    let user = sessionStorage.getItem(AUTHENTICATE_USER);
    return !(user === null)
  }
  getAuthUser() {
    //console.log('getAuthUser()')
    return sessionStorage.getItem(AUTHENTICATE_USER)
  }
  getAuthToken() {
      //console.log('getAuthToken()')
    if (this.getAuthUser())
      return sessionStorage.getItem(TOKEN)
  }
  loggedOut() {
    sessionStorage.removeItem(AUTHENTICATE_USER);
    sessionStorage.removeItem(TOKEN)
  }
  basicAuthentication(username, password) {
    let basicAuthString = 'Basic ' + window.btoa(username + ':' + password);
    console.log(basicAuthString + " " + username + " " + password)
    let headers = new HttpHeaders({
      'Authorization': basicAuthString
    });
    return this.http.get<Authenticate>(`${API_URL}/basic/auth`, { headers }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATE_USER, username)
          sessionStorage.setItem(TOKEN, basicAuthString)
          return data;
        }
      )
    )
  }

  jwtAuthentication(username, password) {
  
    return this.http.post<any>(`${API_URL}/authenticate`,{
      username,
      password
    }).pipe(
      map(
        data => {
          sessionStorage.setItem(AUTHENTICATE_USER, username)
          sessionStorage.setItem(TOKEN, `Bearer ${data.token}`)
          return data;
        }
      )
    )
  }
 
}
