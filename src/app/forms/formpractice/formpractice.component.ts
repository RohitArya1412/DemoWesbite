import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators,NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formpractice',
  templateUrl: './formpractice.component.html',
  styleUrls: ['./formpractice.component.css']
})
export class FormpracticeComponent {
  constructor(private route:Router){}

  submitted: boolean = false
  saveForm(val: NgForm) {
    console.log(val.value);
    console.log();
    val.form.reset();
  }

  // <--Reactive Form--->

  formContact: any = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.max(100), Validators.min(1)]),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),

  });
  save() {
    if (this.formContact.valid) {
      console.log(this.formContact.value);
      this.submitted = false
      this.formContact.reset();
    }
    else if (this.formContact.invalid) {
      console.log('invalid');
      this.submitted = true;
    }
  }
  back(){
    this.route.navigate(['forms'])
  }

}
