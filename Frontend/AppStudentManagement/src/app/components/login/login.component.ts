import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { User } from '../../classes/User';
import { UserloginService } from '../../Services/userlogin.service';
import { Button } from 'primeng/button';
import { provideRouter, Router } from '@angular/router';
import { RouterModule } from '@angular/router'; 
import { RegisterComponent } from '../register/register.component';
import { util } from '../../Utils/Util';
import { role } from '../../Utils/role';
import { loggedUser } from '../../classes/LoggedUser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,
    RouterModule,CommonModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  user:loggedUser;
  constructor(private userLoginService:UserloginService,private router:Router){
    this.user=new loggedUser();
    console.log(userLoginService)}

login() {
console.log(this.user);
this.userLoginService.userLogin(this.user).subscribe( (data:any)=>
  {
   console.log("data"+data.userdto.role);
   util.loggedInUser=this.user.email;


   console.log(util.loggedInUser+"saved")
    alert("Logged successfully");
    // this.router.navigate(['/home'])
   
    if(String(data.userdto.role)==='STUDENT')
    {
      util.loggedInUser=this.user.email;
    this.router.navigate(['/home']);
    }
    else if(String(data.userdto.role)=="ADMIN")
    this.router.navigate(['/admin']);
  },
error=>{
  console.log(error);
  alert(error.error);
});
}
}
