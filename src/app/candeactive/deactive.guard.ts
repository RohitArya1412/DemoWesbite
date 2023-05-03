import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree,CanDeactivate } from '@angular/router';
import { CandeactiveComponent } from './candeactive.component';


@Injectable({
  providedIn: 'root'
})
export class DeactiveGuard implements CanDeactivate<CandeactiveComponent> {
  canDeactivate():boolean{
    return window.confirm('Are you sure to Navigate ?')

  }
  
    
  
  
}
