import { Component } from '@angular/core';
import { StudentService } from '../../../Services/student.service';
import { util } from '../../../Utils/Util';
import { RegisteredCourse } from '../../../classes/RegisteredCourse';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-my-courses',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './my-courses.component.html',
  styleUrl: './my-courses.component.css'
})
export class MyCoursesComponent {

  url ="http://localhost:8080/student/getstudentCourses";
  checkouturl="http://localhost:8080/student/checkout";


  myCourses:RegisteredCourse[]=[]
  constructor(private studentService:StudentService){}

  
  
  ngOnInit(){
    console.log(util.loggedInUser);
    this.getMyCourses();
  }

checkOut(courseName: string) {

  const confirmed = window.confirm(`Are you sure you want to buy the course: ${courseName}?`);
if(confirmed){
  this.studentService.CheckOut(this.checkouturl,courseName).subscribe(
    (response:any)=>{

      alert(response.message+` ${courseName}`);
      this.updateCourseStatus(courseName)
    }
    ,
    (error:any)=>{
      alert(error.error+"e")
      
    }
  )
}
}
  updateCourseStatus(courseName: string) {
    const course = this.myCourses.find(c => c.courseTitle === courseName);
    if (course) {
      console.log("updating course"+course.courseTitle);
      course.status = "PURCHASED"; 
    }
  }

 

  getMyCourses(){
    this.studentService.getMyCourses(this.url).subscribe(
      (response:RegisteredCourse[])=>{
        console.log("response"+response[0]+"  "+response[0].courseTitle);
        this.myCourses=response,
        console.log("fetched data"+this.myCourses)}
        ,

      error=>console.log(error.error)
    )
  }
}
