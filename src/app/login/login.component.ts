import { Component } from '@angular/core';
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
  loginUser(loginForm:NgForm){
    this.userservice.login(loginForm.value).subscribe(
      data=>{
      console.log(data.token);
      this.userauthservice.setToken(data.token);
      // this.userauthservice.setRoles(data.user.roles);
      // let role=data.user.roles[0];

      // if(role=="admin"){
      //   this.router.navigate(['/admin']);
      // }
      // else
      // this.router.navigate(['/admin']);
    },
    (error)=>{
      console.log(error);
    });
  }
}
