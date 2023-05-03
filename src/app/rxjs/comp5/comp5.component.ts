import { Component } from '@angular/core';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-comp5',
  templateUrl: './comp5.component.html',
  styleUrls: ['./comp5.component.css']
})
export class Comp5Component {
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
