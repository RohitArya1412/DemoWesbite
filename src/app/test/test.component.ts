import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  emailVerificationForm!:FormGroup;
  emailVerifyArray:any=[]
  constructor(private formBuilder:FormBuilder){
  }

  ngOnInit(){
    this.emailVerificationForm=this.formBuilder.group({
      email:['',Validators.required],
      password:['',Validators.required],
      isChecked:['',Validators.required],
    })
  }
  get formError(){
    return this.emailVerificationForm.controls;
  }

  submit(){
    // this.emailVerifyArray=[]
    if(this.emailVerificationForm.valid){
      this.emailVerifyArray.push(this.emailVerificationForm.value)
      console.log(this.emailVerifyArray,"sss");
      // alert("Email Verified Successfully")
      this.emailVerificationForm.reset()
  }
  else{
    this.emailVerificationForm.markAllAsTouched()
  }
  }

}
