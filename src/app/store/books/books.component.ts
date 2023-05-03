import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent {
  constructor (private routes:Router){

  }
  
}
