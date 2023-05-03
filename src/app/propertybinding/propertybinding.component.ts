import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent {
  arr: any[] = [];
  value:any
  name = "John Doe";
  dis = true
  saveForm = new FormGroup({
    data: new FormControl('', [Validators.required])
  })
  
  saveVal() {

    this.arr.push(this.saveForm.value,);
    console.log(this.arr);
    this.saveForm.reset();


  }
  constructor(private router: Router,private activeRoute:ActivatedRoute) { }
  recData(val: any) {
    this.value=val.target.value;
    console.log(this.value);  

    
    this.router.navigate(['/propertybinding',this.value])

  }



}
