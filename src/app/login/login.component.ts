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
    this.userservice.login(loginForm.value).subscribe(
      data=>{
      this.userauthservice.setToken(data.token);
      this.flag=true;
      // this.userauthservice.setRoles(data.user.roles);
      // let role=data.user.roles[0];

      // if(role=="admin"){
      //   this.router.navigate(['/admin']);
      // }
      // else
      this.router.navigate(['/employees'] );
    },
    (error)=>{
      console.log(error);
    });
  }
  sendLoginMessage(){
    this.messageEvent.emit(this.flag);
  }
}
