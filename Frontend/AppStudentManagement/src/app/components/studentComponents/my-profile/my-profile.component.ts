import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../Services/student.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { HttpResponse } from '@angular/common/http';
import { Student } from '../../../classes/Student';
import { FormsModule } from '@angular/forms';
import { loggedUser } from '../../../classes/LoggedUser';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; 


@Component({
  selector: 'app-my-profile',
  standalone: true,
  imports: [MatSnackBarModule,FormsModule,CommonModule,MatProgressSpinnerModule],
  templateUrl: './my-profile.component.html',
  styleUrl: './my-profile.component.css'
})
export class MyProfileComponent implements OnInit{

  loading=true
  userEmail: string = '';
  userName: string = '';
  userFileUrl: SafeUrl | null = null;
  userFileType: string | null = null;
  userFetched: boolean = false;

  studentData!:Student
  user!:loggedUser
  studenturl="http://localhost:8080/student/getStudent";  //change with dynamic
  
  userurl="http://localhost:8080/user/getData"
  constructor(private studentService:StudentService,private sanitizer: DomSanitizer,private snackBar:MatSnackBar){}

  
  ngOnInit(): void {
  console.log(this.studenturl+"url")
    this.studentService.getData(this.studenturl).subscribe( 

      (response:Student)=>{this.studentData=response;
        
        console.log(this.studentData)
        this.loading=false},
      error=>console.log(error));

      // this.studentService.getUser(this.userurl).subscribe(
      //   (response:loggedUser)=>
      //   {
      //     this.user=response;
      //     console.log(response)
      //   },
      //   (error:any)=>
      //   {
      //    console.log(error)
      //   }
      // )
      // this.studentService.getDetails(this.userEmail).subscribe({
       
      //   next: (user) => {
      //     console.log("called");
      //     if (user) {
          
      //       this.userEmail = user.email;
           
      //       this.userFetched = true;
  
      //       if (user.picture) {
      //         const byteArray = new Uint8Array(user.fileData);
      //         const blob = new Blob([byteArray], { type: user.fileType });
      //         this.userFileType = user.fileType;
      //         this.userFileUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(blob));
      //       }
      //       console.log(this.userEmail+"fetched")
      //     }
      //   },
      //   error: (error) => {
      //     this.snackBar.open('Error fetching user profile', error)._dismissAfter(2000);
      //     this.userFetched = false;
      //   }
      // });

     
      
   console.log("data"+this.studentData) 
  }  
}
