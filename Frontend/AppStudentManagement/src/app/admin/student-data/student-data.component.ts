import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import { Student } from '../../classes/Student';
import { AdminService } from '../../Services/admin.service';
import { StudentData } from '../../classes/StudentData';
import { CourseRegistered } from '../../classes/CourseRegistered';


@Component({
  selector: 'app-student-data',
  standalone: true,
  imports: [CommonModule, MatListModule],
  templateUrl: './student-data.component.html',
  styleUrl: './student-data.component.css'
})
export class StudentDataComponent {
DeleteStudent(arg0: string) {
throw new Error('Method not implemented.');
}


students: StudentData[]=[];
 data:Student[]=[];
url="http://localhost:8080/admin/students"
delete="https:/localhost:8080/admin/delete";
constructor(private admin:AdminService){}

ngOnInit(){
  this.admin.getStudent(this.url).subscribe(
    (response:StudentData[])=>{console.log("added");
      this.students=response


      this.processStudentData(response);
  
    }
    ,
    (error:any) =>console.log("error")
  )
}


Unsubscribe(course: string,email:string,name:string) {
  const confirmed = window.confirm(`Cancel subscription of ${name} for ${course} ? `);

  if(confirmed){
  this.admin.unsubsribe(course,email,this.delete).subscribe(
    
    (response:string)=>
      {console.log(response+"success");alert(response);
        this.updateCourseDetails(course,email);
      }
    ,
    (error:any)=>{
      alert(error.error);
     // this.updateCourseDetails(course,email);
     }
  )
}
}

processStudentData(response: any[]): void {
  this.data = [];
  for (let student of response) {
    if (student.courseRegistered && student.courseRegistered.length > 0) {
      for (let course of student.courseRegistered) {
        const studentCourse = new Student();
        studentCourse.firstName = student.firstName;
        studentCourse.lastName = student.lastName;
        studentCourse.email = student.studentemail;
        studentCourse.mobile = student.mobileNumber;
        studentCourse.courseName = course.courseName || 'No Course'; 
        studentCourse.ispurchased = course.purchased;
        studentCourse.registrationTIme = new Date(course.registrationDate);
        studentCourse.coursesregistered=true
        if(studentCourse.ispurchased)
        this.data.push(studentCourse);
      }
    } 
  }

}

 updateCourseDetails(this: any, courseName: string, email: string) {
  console.log("inside method")
  const courseIndex = this.data.findIndex((c: Student) => c.courseName === courseName && c.email === email);
  console.log(courseIndex+"i")
  if (courseIndex !== -1) {
    console.log("Updating course: " + this.data[courseIndex].courseTitle);
    this.data.splice(courseIndex, 1); 
  } else {
    console.log("Course not found");
  }
}

}


