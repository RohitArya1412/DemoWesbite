import { Component,ViewChild } from '@angular/core';
import { DataChildComponent } from './data-child/data-child.component';

@Component({
  selector: 'app-datashare',
  templateUrl: './datashare.component.html',
  styleUrls: ['./datashare.component.css']
})
export class DatashareComponent {
  value: any;
  child: any;
  @ViewChild(DataChildComponent) dataChild:DataChildComponent | undefined;

//send data to parent component
  senddata(val: any) {
    this.value=val.value;
  }
  getData(val:any){
    this.child=val
    console.log(val);
    
  }
  increase(){
   this.dataChild?.increase1()
  }
}
