import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';

import { Router } from '@angular/router';
import { UsernameService } from './username.service';

@Injectable({
  providedIn: 'root'
})
export class ActivateGuard implements CanActivate {
  constructor(private user:UsernameService ,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean|any {
      return true;
  //  if(localStorage.getItem('email')!=null){
  //   return true;
  //  }else{
  //   alert('Please Login')
  //   this.router.navigate(['login']);
  //   return false
  //  }

  }

  
}
