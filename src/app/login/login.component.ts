import { Component, Input, Output , EventEmitter} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { EmpService } from '../emp.service';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private userservice: EmpService, 
      private userauthservice: UserAuthService,
      private router: Router){}
      @Output() messageEvent= new EventEmitter<Boolean>();
      flag!: boolean;

  loginUser(loginForm:NgForm){
    this.userservice.login(loginForm.value).subscribe({
    next:(response)=>{
      this.userauthservice.setToken(response.token);
      this.flag=true;
    }, error:(error)=>{
      console.log(error);
    }
    });
  }

  
  sendLoginMessage(){
    this.messageEvent.emit(this.flag);
  }
}
