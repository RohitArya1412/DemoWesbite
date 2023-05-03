import { Component, ViewChild } from '@angular/core';
import { Newcomponent1Component } from './newcomponent1/newcomponent1.component';

@Component({
  selector: 'app-newcomponent',
  templateUrl: './newcomponent.component.html',
  styleUrls: ['./newcomponent.component.css']
})
export class NewcomponentComponent {
  value:any;
  show:any;
  @ViewChild(Newcomponent1Component) data?:Newcomponent1Component;
  sendData(val:any){
    this.value=val.value;
  }
  addData(val:any){
    this.show=val;
  }
  incre(){
    this.data?.increase();
  }

}
