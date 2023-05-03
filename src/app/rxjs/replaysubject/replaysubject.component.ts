import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { ServiceService } from 'src/app/service/service.service';

@Component({
  selector: 'app-replaysubject',
  templateUrl: './replaysubject.component.html',
  styleUrls: ['./replaysubject.component.css'],
  providers: [ServiceService],
})
export class ReplaysubjectComponent implements OnInit {
  constructor(private data: ServiceService) { }
  userlist1 = ['angular1', 'angular2']
  userlist2: any = []
  userlist3: any = []

  //subscribe mode 
  subscribe2: boolean = false
  subscribe3: boolean = false
  subscription2?: Subscription
  subscription3?: Subscription
  // subsribe user 2
  user2Subscribe() {
    if (this.subscribe2) {
      this.subscription2?.unsubscribe();
    }
    else {
      this.subscription2 = this.data.videoList.subscribe(res => {
        this.userlist2.push(res)
      })

    }

    this.subscribe2 = !this.subscribe2;
  }
  //subscribe user 3
  user3Subscribe() {
    if (this.subscribe3) {
      this.subscription3?.unsubscribe();
    }
    else {
      this.subscription3 = this.data.videoList.subscribe(res => {
        this.userlist3.push(res)
      })

    }
    this.subscribe3 = !this.subscribe3
  }


  //user 1 list 

  ngOnInit(): void {
    this.data.videoList.subscribe(res => {
      console.log(res);
      this.userlist1.push(res);
    })

  }
  // add item 
  addVideo(val: any) {
    this.data.videoList.next(val);
  }
  // show input field 
  showfield: boolean = true;
  initSubscription?: Subscription
  showInput() {
    const listVideo = interval(1000)
    if (this.showfield) {
      this.initSubscription = listVideo.subscribe((res) => {
        this.data.videoList.next('Video' + res)
      })
    }
    else {
      this.initSubscription?.unsubscribe();
    }


    this.showfield = !this.showfield

  }

}
