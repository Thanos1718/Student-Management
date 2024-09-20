import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { User } from '../classes/User';
import { loggedUser } from '../classes/LoggedUser';
import { util } from '../Utils/Util';

@Injectable({
  providedIn: 'root'
})
export class UserloginService {
 
   constructor(private httpClient:HttpClient) { 

   }
  static baseURL="http://localhost:8080/user/login"

  

  userLogin(user:User):Observable<any>{
   return this.httpClient.post<any>(`${UserloginService.baseURL}`,user)
   .pipe(
    tap(response=>
    {
      if(response.token)
      {
        localStorage.setItem('token',response.token);
        localStorage.setItem('email',response.userdto.email);
        util.loggedInUser=response.userdto.email
        console.log(response+ " r"+response.userdto.email+" "+response.token);
      }
    }
    )
   );

  }

 static getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
  getUser():string |null{
    return localStorage.getItem('email')
  }
 
 
}
