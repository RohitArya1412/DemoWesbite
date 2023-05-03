import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-data-child',
  templateUrl: './data-child.component.html',
  styleUrls: ['./data-child.component.css']
})
export class DataChildComponent {
  increase: number = 0
  @Input()
  dataChild: string = "shivam";
  @Output() childOutput: EventEmitter<string> = new EventEmitter();

  sendData(val: any) {
    console.log(val.value);
    this.childOutput.emit(val.value);

  }
  increase1() {
    this.increase++;
  }


}
