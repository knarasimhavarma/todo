import { Injectable } from '@angular/core';
import { ɵHttpInterceptingHandler, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

import { BasicAuthenticationService } from '../basic-authentication.service';



@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthenticationService implements HttpInterceptor {
  constructor(private basicAuth: BasicAuthenticationService) { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    // let username = 'user'
    // let password = 'user'
    // let basicAuthString = 'Basic ' + window.btoa(username + ':' + password)
    let basicAuthString = this.basicAuth.getAuthToken();
    let username = this.basicAuth.getAuthUser();
    
    if (basicAuthString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: basicAuthString
        }
      })
      console.log("Http Intercepter")
    }
    return next.handle(request);
  }
}

