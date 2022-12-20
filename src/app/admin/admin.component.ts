import { Component } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  flag: boolean = false;
  email!: string ;
  password!: string;
  login(){
    if(this.email=='rajnish@gmail.com' && this.password=='1997@Raja')
    this.flag=true;
  }
}
