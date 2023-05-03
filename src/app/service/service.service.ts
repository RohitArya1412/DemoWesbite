import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'

})
export class ServiceService {

  rxjs = new Subject<boolean>()
  userName = new Subject<string>();
  videoList = new ReplaySubject<string>(3);

  arr = [
    { id: '1', name: 'Mark', email: 'mark@gmail.com', img: 'https://media.istockphoto.com/id/1324786380/photo/young-handsome-smiling-man-in-brown-shirt-and-glasses-feeling-confident-isolated-on-gray.jpg?b=1&s=170667a&w=0&k=20&c=7yoJXyEpncSC4wXBuuDeRgelV1lfAEqWmzCuu3JfRqg=' },
    { id: '2', name: 'Jacob', email: 'Jacob@gmail.com', img: 'https://thumbs.dreamstime.com/b/profile-picture-caucasian-male-employee-posing-office-happy-young-worker-look-camera-workplace-headshot-portrait-smiling-190186649.jpg' },
    { id: '3', name: 'John', email: 'John@gmail.com', img: 'https://media.istockphoto.com/id/1192579030/photo/portrait-of-smiling-male-employee-posing-in-office.jpg?s=170667a&w=0&k=20&c=jdPw2jjceFUksMt56xZDz3X0XQy79fAP5yERhHGfyFs=' },
    { id: '4', name: 'mary', email: 'mary@gmail.com', img: 'https://www.shutterstock.com/image-photo/confident-smiling-female-employee-260nw-339668693.jpg' },
    { id: '5', name: 'Doe', email: 'Doe@gmail.com', img: 'https://media.istockphoto.com/id/1350800599/photo/happy-indian-business-man-leader-manager-standing-in-office-headshot-portrait.jpg?b=1&s=170667a&w=0&k=20&c=pz5kwfLy64_AQIwiv9FDDJWWkAzb2Lf1F5fjZW23dBo=' },
  ];


  constructor(private http: HttpClient) {

  }
  data() {
    return this.arr
  }
  // getAccountData() {
  //   return this.http.get('http://localhost:3000/Accounts');
  // }

  getAccountData(){
    return this.http.get('http://localhost:4200/assets/mockdata.json')
  }
}
