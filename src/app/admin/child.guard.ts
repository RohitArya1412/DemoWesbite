import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanActivateChildFn, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UsernameService } from './username.service';

@Injectable({
  providedIn: 'root'
})
export class ChildGuard implements CanActivateChild {
  constructor(private data:UsernameService){}
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean  {
    if(this.data.open()){
      return true

    }
    else{
      alert('canActivateChild route')
      
      return false;

    }
  }
  
  
}
