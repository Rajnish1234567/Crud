import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor() { }

  public setRoles(roles:[]){
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getUsers(){
    return JSON.parse(localStorage.getItem('roles') || "");
  }
  public setToken(jwtToken:string){
    localStorage.setItem('token', JSON.stringify(jwtToken));
  }
  getToken(){
    let token=localStorage.getItem('token');
    return token;
  }

  public clear(){
    localStorage.clear();
  }
  public isLoggedIn(){
    return true;
  }
}
