import { CourseRegistered } from "./CourseRegistered";

export class StudentData{
    lastName:string='';
    email:string='';
    mobile:string='';
    firstName:string=''
    courseRegistered!:CourseRegistered[];
    ispurchased!:boolean
    registrationTIme!:Date
}