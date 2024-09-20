import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Course } from '../classes/Course';
import { catchError, Observable, Subject, tap, throwError } from 'rxjs';
import { Student } from '../classes/Student';
import { loggedUser } from '../classes/LoggedUser';
import { RegisteredCourse } from '../classes/RegisteredCourse';
import { util } from '../Utils/Util';
import { UserloginService } from './userlogin.service';

@Injectable({
  providedIn: 'root'
})

export class StudentService {

  constructor(private httpClient:HttpClient,private login:UserloginService) {
   /// this.user=this.login.getUser || ''
  }

 

  

  getUser(userurl: string):Observable<loggedUser> {
    return this.httpClient.get<loggedUser>(`${userurl}/${this.login.getUser}`)
  }

 

  private _courseUpdated = new Subject<void>(); 

  get courseUpdated(){
return this._courseUpdated
  }

  CheckOut(url: string, courseTitle: string): Observable<any> {

    let params = new HttpParams(); 
  
   
    params = params.set('email', util.loggedInUser).set('courseName', courseTitle);
  
  
    console.log("Service hit checkout", params.get('email'), params.get('courseName'));
  
   
    return this.httpClient.put(url, {}, { params })
  }
  
  getMyCourses(url: any) :Observable<RegisteredCourse[]>{
    return this.httpClient.get<RegisteredCourse[]>(`${url}/${"abhishek12@gmail.com"}`)
    }
  data : any

   getData(url:string):Observable<any>
   {
    console.log(url);
    console.log(util.loggedInUser);
 
  //  console.log(newurl+"new")
    return this.httpClient.get(`${url}/abhishek12@gmail.com`).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          console.error('Not Found: ', error.message);
        } else if (error.status === 500) {
          console.error('Server Error: ', error.message);
        } else if (error.status === 401) {
          console.error('Unauthorized: ', error.message);
        } else {
          console.error('Other Error: ', error.message);
        }

        return throwError('An error occurred while fetching data.');
      })
    );
   }

   getDetails(url:string):Observable<any>
   {
    return this.httpClient.get<loggedUser>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          console.error('Not Found: ', error.message);
        } else if (error.status === 500) {
          console.error('Server Error: ', error.message);
        } else if (error.status === 401) {
          console.error('Unauthorized: ', error.message);
        } else {
          console.error('Other Error: ', error.message);
        }

        return throwError('An error occurred while fetching data.');
      })
    );
   }

   getAllcourses(url: string): Observable<Course[]> {
    return this.httpClient.get<Course[]>(url).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 404) {
          console.error('Not Found: ', error.message);
        } else if (error.status === 500) {
          console.error('Server Error: ', error.message);
        } else if (error.status === 401) {
          console.error('Unauthorized: ', error.message);
        } else {
          console.error('Other Error: ', error.message);
        }

        return throwError('An error occurred while fetching data.');
      })
    );
    
  
  }

  buyCourse(myurl: string, courseName: string, email: string, p0?: { responseType: string; }):Observable<any>
  {

   
    
       return this.httpClient.post(myurl,null,{
        
        params:new HttpParams()
        .set('email',email)
        .set('courseName',courseName)
        .set('state',1)
       },)
       .pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status === 400) {
            alert(error)
           } else if (error.status === 500) {
            console.error('Server Error: ', error.message);
          } else if (error.status === 401) {
            console.error('Unauthorized: ', error.message);
          } else {
            console.error('Other Error: ', error.message);
          }
  
          return throwError('An error occurred while fetching data.');
        })
      );
    }

  addToCart(myurl:string, courseName:string,email:string):Observable<any>
  {
    return this.httpClient.post(myurl,null,{
        
        params:new HttpParams()
        .set('email',email)
        .set('courseName',courseName)
        .set('state',0)
       });
  }
}
