import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators  } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { Course } from '../../classes/Course';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../Services/admin.service';
//import { CourseData } from '../../classes/CourseData';




@Component({
  selector: 'app-course-data',
  standalone: true,
  imports: [FormsModule,ReactiveFormsModule,CommonModule],
  templateUrl: './course-data.component.html',
  styleUrl: './course-data.component.css'
})
export class CourseDataComponent {
coursesData: any;

  constructor(private admin:AdminService){}
  course:Course={
    courseName:''
    ,price:'',
    startDate:new Date(),
    endDate:new Date()
    ,description:''
  }
courseForm: FormGroup=new FormGroup(
{
  nameProp: new FormControl("",[Validators?.required]),
  priceProp : new FormControl("",[Validators?.required]),
  sdate:new FormControl("",[Validators?.required]) ,
  edate:new FormControl("",[Validators?.required]),
  descprop: new FormControl("",[Validators?.required])
})

get nameProp(){
  return this.courseForm.get('nameProp') as FormControl
}

get sdate(){
  return this.courseForm.get('sdate') as FormControl
}

get edate(){
  return this.courseForm.get('edate') as FormControl
}

get priceProp(){
  return this.courseForm.get('priceProp') as FormControl
}

get descprop(){
  return this.courseForm.get('descprop') as FormControl
}


  
  getData() {
    this.course.courseName=this.courseForm.get('nameProp')?.value;
    this.course.price=this.courseForm.get('priceProp')?.value;
    this.course.startDate=this.courseForm.get('sdate')?.value;
    this.course.endDate=this.courseForm.get('edate')?.value;
    this.course.description=this.courseForm.get('descprop')?.value;
    console.log("date"+this.course.endDate+ " "+this.course.startDate);


   
    if(this.course.startDate>this.course.endDate)
      alert("Please select valid dates!")
    else
    {
      console.log("saving course");
     this.admin.AddCourse(this.course).subscribe(
    (response:string)=>
    {
   
     alert(response )

    
  },
    (error: any)=>{
      console.log("Error")
      alert(error.error)
    }
    )
  }

  }

}
