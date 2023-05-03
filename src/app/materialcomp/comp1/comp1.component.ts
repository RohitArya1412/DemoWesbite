import { Component } from '@angular/core';
import {MatSnackBar} from '@angular/material/snack-bar';
import {FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component {
  constructor(private _snackBar:MatSnackBar,private _formBuilder: FormBuilder){}
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  }); 
  isLinear = false;

  


}
