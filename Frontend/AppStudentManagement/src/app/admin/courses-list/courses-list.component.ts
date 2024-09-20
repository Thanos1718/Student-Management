import { Component } from '@angular/core';
import { Course } from '../../classes/Course';
import { CommonModule } from '@angular/common';
import { AdminService } from '../../Services/admin.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-courses-list',
  standalone: true,
  imports: [CommonModule,MatSnackBarModule],
  templateUrl: './courses-list.component.html',
  styleUrl: './courses-list.component.css'
})
export class CoursesListComponent {
courses:Course[]=[]
url="http://localhost:8080/admin/getAllcourses";

constructor(private admin:AdminService,private snackbar:MatSnackBar){}
ngOnInit()
{
  this.admin.getAllcourses(this.url).subscribe(
    (data: Course[]) => { 
      this.courses = data; 
    },
    (error) => {
      this.snackbar.open('Error fetching courses!:')._dismissAfter(2500); 
    }
  );

}
}


