import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentHomeComponent } from '../studentComponents/student-home/student-home.component';
import { MyProfileComponent } from '../studentComponents/my-profile/my-profile.component';
import { MyCoursesComponent } from '../studentComponents/my-courses/my-courses.component';
import { LoginComponent } from '../login/login.component';
import { CommonModule } from '@angular/common';
import { StudentService } from '../../Services/student.service';
import { Course } from '../../classes/Course';

import {  MatSnackBar,MatSnackBarModule,} from '@angular/material/snack-bar';
import { MatToolbar,MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule,RouterModule,StudentHomeComponent,MatSnackBarModule,MatToolbarModule,MyProfileComponent,MyCoursesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent implements OnInit {

  
 
component:string="Home"


changeComponent(compoent:string)
{
  this.component=compoent
}
 
  ngOnInit(): void {
    
  }
 
  

}
