import { Component } from '@angular/core';
import { Course } from '../../../classes/Course';
import { StudentService } from '../../../Services/student.service';
import { CommonModule, NgTemplateOutlet } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { util } from '../../../Utils/Util';
import { Router } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';


@Component({
  selector: 'app-student-home',
  standalone: true,
  imports: [CommonModule,NgTemplateOutlet],
  templateUrl: './student-home.component.html',
  styleUrl: './student-home.component.css',
  providers: [
   
  ]

})
export class StudentHomeComponent {
  studentData=[]

  allcourses="http://localhost:8080/student/getAllcourses";
  buyCourse="http://localhost:8080/student/buyCourse";

  coursesData: Course[] = []; 

  constructor(private studentService: StudentService,private snackBar:MatSnackBar,private router:Router) {}

  ngOnInit(): void {

   
    
     this.studentService.getAllcourses(this.allcourses).subscribe(
      (data: Course[]) => { 
        this.coursesData = data; 
      },
      (error) => {
        this.snackBar.open('Error fetching courses!:')._dismissAfter(2500); 
      }
    );
  }

  buyNow(courseName:string): any {
    console.log('Buying course:',courseName);
    const confirmed = window.confirm(`Are you sure you want to buy the course: ${courseName}?`);
    if (confirmed &&  localStorage.getItem('email')) {
     
     this.studentService.buyCourse(this.buyCourse,courseName,util.loggedInUser).subscribe(
      (response:any)=>{
        console.log(response+ " r ")
        
    alert(response.message +" course : "+response.course)
      }
      ,
     (error:any)=>
      console.log(error+ " rerror ")
    );
  }
  }

  addToCart(courseName:string): void {
    const action=window.confirm('Add to cart '+courseName+"?")
    if(action)
    {
      console.log(util.loggedInUser+"course")
      this.studentService.addToCart(this.buyCourse,courseName,util.loggedInUser).subscribe(
        (response:any)=>{
      alert(response.message);
       

      console.log("adding"+response)
        }
        ,
       (error:any)=>
      alert(error.error)
      );
    }
  }
}
