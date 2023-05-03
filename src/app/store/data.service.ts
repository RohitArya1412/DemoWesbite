import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  arr:[]=[]
  

  constructor() {}
    setdata(){
      return this.arr ;     
    }
    
   
}
