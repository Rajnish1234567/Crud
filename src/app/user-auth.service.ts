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
  public setToken(jwtToken: string){
    localStorage.setItem('token', jwtToken);
  }
  getToken(){
    let token:string | null = localStorage.getItem('token');
    // console.log(token+"-----------token");
    return token;
    
  }

  public clear(){
    localStorage.clear();
  }
  public isLoggedIn(){
    const token = this.getToken();
    if(token && token.length==0) return true;
    else return true;
  }
}
