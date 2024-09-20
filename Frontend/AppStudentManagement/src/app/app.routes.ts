import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import {HomeComponent} from './components/home/home.component'
import { StudentHomeComponent } from './components/studentComponents/student-home/student-home.component';
import { MyCoursesComponent } from './components/studentComponents/my-courses/my-courses.component';
import { MyProfileComponent } from './components/studentComponents/my-profile/my-profile.component';
import { HomepageComponent } from './admin/homepage/homepage.component';
import { SendLinkComponent } from './components/send-link/send-link.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';

export const routes: Routes = [
    {
        path:'',redirectTo:'login', pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    }
    ,
    {
        path:'register',
        component:RegisterComponent
    }
    
    ,
    {
        path:'home',
        component:HomeComponent
    }
    ,
    {
        path:'studentHome',
        component:StudentHomeComponent
    }
    ,
    {
        path:'courses',
        component:MyCoursesComponent
    }
    ,
    {
        path:'profile',
        component:MyProfileComponent
    }
    ,
    {
        path:'admin',
        component:HomepageComponent
    }
 ,
 {
    path:'sendLink',
    component:SendLinkComponent
 }
 ,
 {
    path:'reset',
    component:ResetPassComponent
 }
 
];
