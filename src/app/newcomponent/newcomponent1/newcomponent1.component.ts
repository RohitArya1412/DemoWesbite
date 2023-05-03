import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-newcomponent1',
  template: `<p>@input::> {{inputVal}}</p>

  <h1>{{number}}</h1>
  <button (click)="increase()">Increase</button>
  
  <input type="text" #temp>
  <button (click)="sendData(temp)">Add</button>
  <br><br><br><br><br>`,
  styleUrls: ['./newcomponent1.component.css']
})
export class Newcomponent1Component {
  @Input()
  inputVal: any;
  @Output()
  myoutput: EventEmitter<any> = new EventEmitter()
  number: number = 0

  sendData(val: any) {
    this.myoutput.emit(val.value);
  }
  increase() {
    this.number++;
  }

}
