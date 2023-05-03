import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component {
  username: string = 'John';
  constructor(private data: ServiceService) {
    this.data.userName.subscribe((res: string) => {
      this.username = res;
    })
  }
  add(val: any) {
    this.data.userName.next(val);
  }

}
