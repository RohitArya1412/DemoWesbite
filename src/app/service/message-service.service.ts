import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {

  constructor() { 
   
  }
  getHello():string{
    return 'hello'
  }
}


