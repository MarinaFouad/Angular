import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/app/service/account.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor( private accServe :AccountService , private router : Router){}
  loginForm: FormGroup = new FormGroup({
    username: new FormControl(),
    password : new FormControl()
  });

  submit(e:Event){
    e.preventDefault();
    this.accServe.login(this.loginForm.value.username , this.loginForm.value.password);
    this.router.navigate(['/home']);
  }
}
