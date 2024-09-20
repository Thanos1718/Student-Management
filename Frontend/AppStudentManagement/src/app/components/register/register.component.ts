import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; 
import { registration } from '../../classes/registration';
import { RegisterService } from '../../Services/register.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  submitted:boolean=false;
  registrationForm : FormGroup=new FormGroup(
    {
    firstName:new FormControl("",Validators.required),
    lastName:new FormControl("",Validators.required),
    email:new FormControl("",[Validators.required,Validators.email]),
    mobileNumber:new FormControl("",[Validators.required,Validators.minLength(10),Validators.maxLength(10)]),
    username:new FormControl("",[
      Validators.required,
      Validators.pattern(/^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{5,}$/), // RegEx for one uppercase, one number, min length 5
    ]),
    password:new FormControl("", 
      
       [ Validators.required,
        Validators.minLength(8), // Minimum length of 8 characters
        Validators.pattern(/^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)], // RegEx for uppercase, digit, and special character
      
    ),
    confirmPassword:new FormControl("",Validators.required)
    }
    ,
    {
      validators:this.passwordMatchValidator
    }
  );
 reg:registration=new registration()
  
 constructor(private service:RegisterService){}
  ngOnInit(): void {
  
  }

  get firstName():FormControl{
    return this.registrationForm.get("firstName") as FormControl;
  }
  get lastName():FormControl{
    return this.registrationForm.get("lastName") as FormControl;
  }
  get email():FormControl{
    return this.registrationForm.get("email") as FormControl;
  }
  get mobileNumber():FormControl{
    return this.registrationForm.get("mobileNumber") as FormControl;
  }
  get username():FormControl{
    return this.registrationForm.get("username") as FormControl;
  }
  get password():FormControl{
    return this.registrationForm.get("password") as FormControl;
  }
  get confirmPassword():FormControl{
    return this.registrationForm.get("confirmPassword") as FormControl;
  }

  passwordMatchValidator(group: AbstractControl): any {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }
  get f() { return this.registrationForm.controls; }

  registerUser(){
    this.submitted=true
    if(this.registrationForm.valid)
    {
      this.reg.firstName=this.registrationForm.get('firstName')?.value;
      this.reg.lastName=this.registrationForm.get('lastName')?.value;
      this.reg.email=this.registrationForm.get('email')?.value;
      this.reg.mobile=this.registrationForm.get('mobileNumber')?.value;
      this.reg.username=this.registrationForm.get('username')?.value;
      this.reg.password=this.registrationForm.get('password')?.value;
      console.log(this.reg)
      this.submitted=false;
       this.service.register(this.reg);
    }
  
  
  }

  onSubmit(): void {
    if (this.registrationForm.valid) {
      console.log(this.registrationForm.value);
      // Handle form submission logic here
    }
  }
}
