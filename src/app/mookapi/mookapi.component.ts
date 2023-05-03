import { Component, OnInit } from '@angular/core';
import { MookService } from './mook.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-mookapi',
  templateUrl: './mookapi.component.html',
  styleUrls: ['./mookapi.component.css'],
  providers: [MookService]
})
export class MookapiComponent implements OnInit {
  studentData: any;
  user: any;
  saveBtn: boolean = true;
  updateBtn: boolean = false;
  editVal: any;
  searchData: any
  totalLength: any
  page: number = 1;
  pageItem: number = 5;
  passwordMatch: boolean = false
  showSpiner: boolean = true;
  showLoading: boolean = true;
  show: boolean = false
  password: any;
  marqName: any;
  sortOrder = 1;//1= 'ASE' -1= DSC
  color: any
  fontSize: any;
  fontArr: any = [10, 20, 30, 25]
  isVisible: boolean = false;





  constructor(private mookData: MookService) { }

  // form Data

  student: any = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', Validators.required),
    gender: new FormControl('', Validators.required),
    address: new FormGroup({
      city: new FormControl("", [Validators.required]),
      street: new FormControl("", [Validators.required]),
      pincode: new FormControl("", [Validators.required]),
      state: new FormControl("", Validators.required)
    }),
    password: new FormControl('', [Validators.required]),
    confirmPassword: new FormControl('', [Validators.required]),
  })
  //validation method
  get name() {
    return this.student.get('name');
  }
  get email() {
    return this.student.get('email');
  }

  get gender() {
    return this.student.get('gender');
  }
  get country() {
    return this.student.get('country');
  }

  get city() {
    return this.student.get("address").get('city');
  }

  get street() {
    return this.student.get("address").get('street');
  }

  get pincode() {
    return this.student.get("address").get('pincode');
  }
  //form submit data
  saveData() {
    if (this.student.get('password').value == this.student.get('confirmPassword').value) {
      this.user = this.student.value;
      this.passwordMatch = true
      this.student.reset();
      this.mookData.setPost(this.user).subscribe((posts) => {
        this.studentData.push(posts);
        this.totalLength = this.studentData.length;
      })
    } else if (this.student.get('password').value != this.student.get('confirmPassword').value) {
      console.log("password not match");
      this.passwordMatch = true
    }

  }
  //API get Data
  ngOnInit(): void {
    this.password = 'password'
    setTimeout(() => {
      this.mookData.getPosts().subscribe((posts) => {
        this.studentData = posts
        this.totalLength = this.studentData.length;
        console.log(posts);
        console.log(this.totalLength);
        this.showSpiner = false;
        this.showLoading = false;
      })

    }, 1000);

  }
  //edit Data
  editData(item: any) {
    this.saveBtn = false;
    this.updateBtn = true
    this.studentData.filter((val: any) => {
      if (val.id == item.id) {
        this.editVal = val.id;
        console.log(val.id);
        this.student.setValue({
          name: val.name,
          email: val.email,
          gender: val.gender,
          address: {
            city: val.address.city,
            street: val.address.street,
            pincode: val.address.pincode,
            state: val.address.state
          },
          password: val.password,
          confirmPassword: val.confirmPassword
        })
      }
    })
  }
  //update Data
  updateVal(val: any) {
    if (this.student.get('password').value == this.student.get('confirmPassword').value) {
      this.updateBtn = false;
      this.saveBtn = true;
      this.passwordMatch = false;

      console.log(val.target.value);
      console.log(this.student.value);
      this.mookData.setPut(val.target.value, this.student.value).subscribe(post => {
        this.student.reset()
        this.ngOnInit();
        console.log(this.user);
      });
    } else if (this.student.get('password').value != this.student.get('confirmPassword').value) {
      console.log("password not match");
      this.passwordMatch = true
    }
  }
  //delete data 
  deleteData(item: number) {
    if (this.isVisible) {
      return;
    }
    this.isVisible = true;
    setTimeout(() => this.isVisible = false, 2500)

    this.mookData.delete(item).subscribe(post => {
      this.ngOnInit();
      console.log(post);

    })
  }
  //Change Page Item
  chngePge(val: any) {
    this.pageItem = val.target.value;
  }
  //password Hide/Show
  onClick() {
    if (this.password === 'password') {
      this.password = 'text';
      this.show = true;
    } else {
      this.password = 'password';
      this.show = false;
    }
  }
  //sort Data
  onSortClick(event: any) {
    let target = event.currentTarget,
      classList = target.classList;

    if (classList.contains('fa-chevron-up')) {
      classList.remove('fa-chevron-up');
      classList.add('fa-chevron-down');
      this.sortOrder = -1;
    } else {
      classList.add('fa-chevron-up');
      classList.remove('fa-chevron-down');
      this.sortOrder = 1;
    }
    this.sortArr('name');
  }

  sortArr(colName: any) {
    this.studentData.sort((a: any, b: any) => {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();
      return a.localeCompare(b) * this.sortOrder;
    });
  }
  //marquee tag
  marquee(val: any) {
    this.marqName = val;
    this.color = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ","
      +
      Math.floor(Math.random() * 255) + ")";
    this.fontSize = this.fontArr[Math.floor((Math.random() * this.fontArr.length))]
  }
}
