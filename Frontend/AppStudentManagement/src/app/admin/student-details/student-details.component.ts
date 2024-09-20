import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Student } from '../../classes/Student';
import { StudentData } from '../../classes/StudentData';
import { AdminService } from '../../Services/admin.service';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.css'
})
export class StudentDetailsComponent {
  students: StudentData[]=[];
  data:Student[]=[];
  url="http://localhost:8080/admin/students"
  deleteurl="http://localhost:8080/admin/deleteStudent"

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

  //delete
  Delete(email: string) {
    const confirmed = window.confirm(`Are you sure you want to remove the user?`);
    if(confirmed){

    this.admin.Delete(this.deleteurl,email).subscribe(
      (response:string) =>{
        alert("Deleted Successfully!")
        this.updateStudentDetails(email)
      }
        ,
      (error:any)=>console.log(error.error)
    )
  }
}


updateStudentDetails(email: string) {
  console.log("inside method")
  const studentIndex = this.data.findIndex((c: Student) => c.email === email);
 // console.log(courseIndex+"i")
  if (studentIndex !== -1) {
   // console.log("Updating course: " + this.data[courseIndex].courseTitle);
    this.data.splice(studentIndex, 1); 
  } else {
    console.log("Student not found");
  }
}


processStudentData(response: any[]): void {
  this.data = [];
  for (let student of response) {
   
 
        const studentDetails = new Student();
        studentDetails.firstName = student.firstName;
        studentDetails.lastName = student.lastName;
        studentDetails.email = student.studentemail;
        studentDetails.mobile = student.mobileNumber;
     
       this.data.push(studentDetails);
  }


 
}

}
