import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  baseURL :string = "http://localhost:3002/users";
  token :boolean=false;
  constructor(private HttpClient : HttpClient ) { }

  register(){}

  login(email:string , password:string){
    this.HttpClient.get(`${this.baseURL}?email=${email}&password=${password}`).subscribe((data)=>{
      if(data){
        this.token = true;
      }
    })
  }

  logout(){
    this.token=false;
  }
  isLoged(){return this.token;}
}
