import { Component } from '@angular/core';
import { UserAuthService } from '../user-auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(public userAuthService: UserAuthService){}
  ngOnInit() {
  }
  login:Boolean=false;
  public isLoggedIn() : boolean {
    return this.userAuthService.isLoggedIn();
  }
  public logout(){
    this.userAuthService.clear();
  }
}
