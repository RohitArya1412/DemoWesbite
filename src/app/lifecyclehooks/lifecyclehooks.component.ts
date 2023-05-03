import { Component, DoCheck, OnChanges, SimpleChanges } from '@angular/core';
import { MessageServiceService } from '../service/message-service.service';

@Component({
  selector: 'app-lifecyclehooks',
  templateUrl: './lifecyclehooks.component.html',
  styleUrls: ['./lifecyclehooks.component.css']
})
export class LifecyclehooksComponent implements DoCheck {
  msg: unknown;
  childData:unknown;
  constructor(private message: MessageServiceService) {
    this.msg = this.message.getHello()
    console.log(this.msg);

  }
  value: any;
  delComp: boolean = true;
  saveData(val: any) {
    this.value = val.value;
  }
  destoryComp() {
    this.delComp = false;
  }
  ngDoCheck(): void {
    console.log("parent component is called");
  }
  getdata(val:string){
    this.childData=val
    
    
  }
 

}
