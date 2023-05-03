import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-comp4',
  templateUrl: './comp4.component.html',
  styleUrls: ['./comp4.component.css']
})
export class Comp4Component {
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
