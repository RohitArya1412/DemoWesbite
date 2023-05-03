import { Component, OnInit } from '@angular/core';
import { ServiceService } from './service/service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private data:ServiceService){}
  title = 'router';
  rxjs:boolean=false;
  ngOnInit(): void {
    this.data.rxjs.subscribe((res)=>{
      this.rxjs=res;
    })
  }

}
