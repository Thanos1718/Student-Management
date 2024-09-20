import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { registration } from '../classes/registration';
import { Router } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { loggedUser } from '../classes/LoggedUser';
import { util } from '../Utils/Util';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

 static url:string="http://localhost:8080/user/register"
  private response:any

  constructor(private httpClient:HttpClient,private router:Router) { }

  register(details:registration){
    console.log("register service"+details);
    this.httpClient.post(RegisterService.url,details,{responseType:'text'}).subscribe((data:any)=>

     { 
      this.response=data;

     console.log("this is my data"+data);
     alert("Registered Successfully!");
    util.loggedInUser=details.email;
     this.navigateToLogin();
     },
     (error)=>{console.log(error);
      alert(error.error)
     }
    )
  }
  navigateToLogin(){
   
    this.router.navigate(['/login']);
  }
  
  
}
