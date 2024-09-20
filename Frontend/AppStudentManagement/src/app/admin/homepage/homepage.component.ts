import { Component } from '@angular/core';
import { StudentDataComponent } from '../student-data/student-data.component';
import { CommonModule } from '@angular/common';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CourseDataComponent } from "../course-data/course-data.component";
import { CoursesListComponent } from "../courses-list/courses-list.component";
import { StudentDetailsComponent } from "../student-details/student-details.component";

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CommonModule, MatToolbarModule, CourseDataComponent, StudentDataComponent, CoursesListComponent, StudentDetailsComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {
changeComponent(comp: string) {
  this.component=comp
}
  component:string='Details'
}
