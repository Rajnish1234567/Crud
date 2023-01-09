import { JsonPipe } from '@angular/common';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService implements OnInit{

  constructor() { }

  ngOnInit(): void {
  }

  public setRoles(roles:[]){
    localStorage.setItem('roles', JSON.stringify(roles));
  }

  public getRoles(){
    return JSON.parse(localStorage.getItem('roles') || "");
  }
  public setToken(jwtToken: string){
    localStorage.setItem('token', jwtToken);
  }
  getToken(){
    let token:string | null = localStorage.getItem('token');
    return token;
    
  }

  public clear(){
    localStorage.clear();
  }
  public isLoggedIn(){
    const token = this.getToken();
    if(token!=null) return true;
    else return false;
  }
}
