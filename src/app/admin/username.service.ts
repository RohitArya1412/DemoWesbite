import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsernameService {
  constructor() { }
  login(email: string, password: string): any {
    if (email == 'admin@gmail.com' && password == 'admin') {
      console.log("login");
      
      localStorage.setItem('username', 'admin@gmail.com');
      return true;


    } else {
      return false;
    }
  }
  open(){
    return false;
  }
}
