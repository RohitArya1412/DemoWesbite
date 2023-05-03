import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-comp3',
  templateUrl: './comp3.component.html',
  styleUrls: ['./comp3.component.css']
})
export class Comp3Component {
  username: string = 'John';
  constructor(private data:ServiceService) {
    this.data.userName.subscribe((res: string) => {
      this.username = res;
    })
  }
  add(val: any) {
    this.data.userName.next(val);
  }
}
