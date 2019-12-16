import { Injectable } from '@angular/core';
import { ɵHttpInterceptingHandler, HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class HttpIntercepterBasicAuthenticationService implements HttpInterceptor {
  constructor() { }
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username = 'user'
    let password = 'password'
    let basicAuthString = 'Basic ' + window.btoa(username + ':' + password)
    request = request.clone({
      setHeaders: {
        Authorization: basicAuthString
      }
    })
    return next.handle(request);
  }
}

