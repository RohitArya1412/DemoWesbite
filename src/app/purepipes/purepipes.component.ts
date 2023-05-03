import { Pipe } from '@angular/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-purepipes',
  template: `<h1>pure: {{ Object | purePipe }}</h1>
  <h1>impure: {{ Object | impurepipes }}</h1>
  <button (click)='fun()'>change data</button>`,
  styleUrls: ['./purepipes.component.css']
})
export class PurepipesComponent {

  Object = {value: 1};
  fun() { this.Object.value++; }
}



