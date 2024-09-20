import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { response } from '../../Utils/response';



@Component({
  selector: 'app-send-link',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './send-link.component.html',
  styleUrl: './send-link.component.css'
})

export class SendLinkComponent {
  emailUrl="http://localhost:8080/user/password/forgot"
  email=''
  constructor(private http:HttpClient){}
  sendEmail(){
   this.http.post(this.emailUrl,{email:this.email}).subscribe(
    (response:any)=>alert(response),
    (error:any)=>alert(error.error)
   )
}
}
