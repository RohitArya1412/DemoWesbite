import { Component } from '@angular/core'
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent {
  constructor(private route:Router){}

  arr: any[] = [];
  country = ["Jaipur", "Lucknow", "Mumbai", "Gorakhpur"]
  show: Boolean = false
  btnName: boolean = false;
  name: any;
  email: any;
  pswrd: any;
  pswrd1: any;
  cty: any;
  ag: any;
  gndr: any;
  show1: any;


  //  Custom validation
  // contactForm = new FormGroup({
  //   fullName: new FormControl('', Validators.required),
  //   email: new FormControl('', [Validators.required, Validators.email]),
  //   age: new FormControl('', [Validators.required, Validators.max(100), Validators.min(1)]),
  //   city: new FormControl('', Validators.required),
  //   password: new FormControl('', [Validators.required, Validators.minLength(5)]),
  //   password1: new FormControl('', [Validators.required, Validators.minLength(5)]),
  //   gender: new FormControl('')
  // }, [psswrdMatch('password', 'password1')]);
  contactForm: any = new FormGroup({
    fullName: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    age: new FormControl('', [Validators.required, Validators.max(100), Validators.min(1)]),
    city: new FormControl('', Validators.required),
    password: new FormControl('', [Validators.required, Validators.minLength(5)]),
    password1: new FormControl('', [Validators.required, Validators.minLength(5)]),
    gender: new FormControl('')
  });
  aIndex: any;
  sName: boolean = true;
  saveForm() {
    if (this.contactForm.get('password').value == this.contactForm.get('password1').value) {
      this.arr.unshift(this.contactForm.value)
      console.log(this.contactForm);
      console.log(this.arr);
      this.contactForm.reset();
      this.show = true
      this.show1 = false;
    } else if (this.contactForm.get('password').value !== this.contactForm.get('password1').value) {
      console.log("Password does not match");
      this.show1 = true;
    }

  }
  delete(i: any) {
    // console.log(i.target.value);    
    this.arr.filter((v: any, index: any) => {
      if (index == i.target.value) {
        this.arr.splice(index, 1)
        // alert("are you sure");
      }
    })
    if (this.arr.length == 0) {
      this.show = false;
      console.log("dknkdkgkjn");
    }
  }
  edit(val: any) {
    console.log(val.target.value);
    this.btnName = true;
    this.sName = false;
    this.arr.filter((v: any, index: any) => {
      if (index == val.target.value) {
        console.log(v.fullName);
        this.aIndex = index
        this.name = v.fullName
        this.email = v.email
        this.pswrd = v.password;
        this.cty = v.city
        this.gndr = v.gender
        this.ag = v.age
        this.pswrd1 = v.password1
        console.log(this.name, "check");
        this.contactForm.setValue({
          fullName: this.name,
          email: this.email,
          age: this.ag,
          city: this.cty,
          password: this.pswrd,
          password1: this.pswrd1,
          gender: this.gndr
        });
        // this.contactForm = new FormGroup({
        //   fullName: new FormControl(v.fullName, Validators.required),
        //   email: new FormControl(v.email, [Validators.required, Validators.email]),
        //   age: new FormControl(v.age, [Validators.required, Validators.max(100), Validators.min(1)]),
        //   city: new FormControl(v.city, Validators.required),
        //   password: new FormControl(v.password, [Validators.required, Validators.minLength(5)]),
        //   gender: new FormControl(v.gender)

        // });
      }
      // if (index == val.target.value) {
      //   this.arr.splice(index, 1)
      //   console.log(this.arr);
      // }
    })
  }
  setVal1() {
    this.contactForm.setValue({
      fullName: "Shivam Rai",
      email: "shivam@gmail.com",
      age: "24",
      city: "Gorakhpur",
      password: "123456789",
      password1: "123456789",
      gender: "male"
    });
  }
  patchVal() {
    this.contactForm.patchValue({
      fullName: "Shivam Rai",
      email: "shivam@gmail.com",
      age: "24",
      city: "Gorakhpur",
      gender: "male"
    });
  }
  updateVal(a: any) {
    if (this.contactForm.get('password').value == this.contactForm.get('password1').value) {
      this.arr[a.target.value] = this.contactForm.value
      this.btnName = false
      this.sName = true
      this.show1 = false;
      this.contactForm.reset();
    } else if (this.contactForm.get('password').value != this.contactForm.get('password1').value) {
      this.show1 = true;
    }
  }


  back(){
    this.route.navigate(['forms'])
  }

}
