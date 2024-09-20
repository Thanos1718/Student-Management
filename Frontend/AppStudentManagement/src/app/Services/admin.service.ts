import { Injectable } from '@angular/core';
import { Course } from '../classes/Course';
import { catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpParams, HttpResponse } from '@angular/common/http';
import { Student } from '../classes/Student';
import { StudentData } from '../classes/StudentData';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  url="http://localhost:8080/admin/addCourse"
  unsubscribe="http://localhost:8080/admin/cancelCourse"



  Delete(deleteurl: string, email: string):Observable<string> {
  
    return this.http.delete<string>(`${deleteurl}/${email}`, { responseType: 'text' as 'json' })
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 400) {
          console.log("this error came")
         alert(error.error);
        } else if (error.status === 500) {
          console.error('Server Error: ', error.message);
          alert(error.error)
        } else if (error.status === 401) {
          console.error('Unauthorized: ', error.message);
          alert(error.error)

        } else {
          console.error('Other Error: ', error.message);
          alert(error.error)
        }
        return throwError(error.error);
      }))
  }

  unsubsribe(course: string, email: string,url:string):Observable<string> {
    console.log("deleting"+email+course);
    let params=new HttpParams()
    .set('email',email)
    .set('course',course)
   // console.log("deleting"+params.get('email') +params.get('courseName'));
    return this.http.delete<string>(this.unsubscribe, { params, responseType: 'text' as 'json' })
    .pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
         alert(error.error);
        } else if (error.status === 500) {
          console.error('Server Error: ', error.message);
          alert(error.error)
        } else if (error.status === 401) {
          console.error('Unauthorized: ', error.message);
          alert(error.error)

        } else {
          console.error('Other Error: ', error.message);
          alert(error.error)
        }
        return throwError(error.error);
      }))
  }



  getStudent(studenturl: string) :Observable<StudentData[]>{

    return this.http.get<StudentData[]>(studenturl);
  }

  constructor(private http:HttpClient){}
  
  AddCourse(course: Course):Observable<string> {
   return this.http.post<string>(this.url,course, { responseType: 'text' as 'json' });
  }

  
  getAllcourses(url: string): Observable<Course[]> {
    console.log("in service");
    return this.http.get<Course[]>(url); 
  }
  
}
