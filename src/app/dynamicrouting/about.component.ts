import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  arr:any[]=[
    {name:'John',email:'john@gmail.com'},
    {name:'Johny',email:'johny@gmail.com'},
    {name:'Doe',email:'doe@gmail.com'},
    {name:'Marry',email:'marry@gmail.com'}
  ]

}
