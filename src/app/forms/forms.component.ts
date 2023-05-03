import { Component } from '@angular/core';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent {
  showtem1:boolean=false;
  showReact1:boolean=false;
  showformP1:boolean=false;
  showtem(){
    this.showtem1=true;
    this.showReact1=false;
    this.showformP1=false
  }
  showReact(){
    this.showReact1=true;
    this.showtem1=false
    this.showformP1=false
  }
  showformP(){
    this.showformP1=true;
    this.showtem1=false;
    this.showReact1=false;
  }

}
