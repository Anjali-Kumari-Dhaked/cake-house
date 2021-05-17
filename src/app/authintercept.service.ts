import { HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthinterceptService implements HttpInterceptor {

  constructor() { }

  intercept(req:HttpRequest<any>, next:HttpHandler) {

    if(localStorage.user) {
      req = req.clone({setHeaders:{
        authtoken:JSON.parse(localStorage.user).token
      }})
    }
    return next.handle(req);
  }
}
