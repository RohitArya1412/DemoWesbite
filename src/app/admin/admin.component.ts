import { Component } from '@angular/core';
import { FormControl, FormGroup, Validator } from '@angular/forms';
import { UsernameService } from './username.service';
import { Router } from '@angular/router'
import { ActivateGuard } from './activate.guard';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [UsernameService]
})
export class AdminComponent {
  isSubmitted: any;
  isValidUser: any;
  email: any
  passwrd: any;
  val: Boolean = false;
  msg: string = '';
  constructor(private service: UsernameService, private route: Router, private guards: ActivateGuard) { }

  //form structure 
  login = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  //submit value;
  saveData() {
    this.email = this.login.get('username')?.value
    this.passwrd = this.login.get('password')?.value
    var output = this.service.login(this.email, this.passwrd);
    console.log(output, "shjhndsjndjk");

    if (output == true) {
      this.route.navigate(['homePage']);
    } else {
      this.msg = "invalid username or password"
    }

  }
  clrStorage(){
    localStorage.clear();
  }
}
