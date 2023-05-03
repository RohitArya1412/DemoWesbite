import { Component } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { DataService } from '../store/data.service';


@Component({
  selector: 'app-adddata',
  templateUrl: './adddata.component.html',
  styleUrls: ['./adddata.component.css'],
  providers:[DataService],
})
export class AdddataComponent {
  val:any
  constructor(private data:DataService) {
    this.val=this.data.setdata();   
  }
  add=new FormGroup({
    data:new FormControl('',[Validators.required]),
  })
  addData()
  {    
    this.val.push(this.add.value); 
    console.log(this.val);
    this.add.reset();
    
  }

}
