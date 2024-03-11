import { Route, Router } from '@angular/router';
import { AccountService } from './../../../service/account.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
constructor(private accservice :AccountService , private router : Router){}

  isLogin(){
    return this.accservice.isLoged();
  }
  isLogOut(){
    this.accservice.logout();
    this.router.navigate(['/home']);
  }
}
