import { Component } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent {
  name:any;
  selected:any;
  sel:any;
  color:unknown;
  bgColor:unknown;
 
  show() {
    alert("hiii")
    this.name="hiiii "

  };
  chngefun(val:any){
    
   this.selected=val.target.value;
   if(this.selected=="red"){
    console.log("red");
    this.color="red"
    this.bgColor="green";
    document.body.style.color="rgb(120, 173, 28)"
    
   }
   else if(this.selected=="blue"){
   this.color="blue"
   this.bgColor="red"
   document.body.style.color="rgb(120, 100, 28)"

   }
   else if(this.selected=="green"){
    this.color="green"
    this.bgColor="yellow"
    document.body.style.color="rgb(100, 173, 28)"
    
   }
   else if(this.selected=="yellow"){
   this.color="yellow"
   this.bgColor="green"
   document.body.style.color="rgb(120, 173, 200)"
    
   }
   else if(this.selected=="aquamarine"){
    this.bgColor="aquamarine"
    this.color="black";
    document.body.style.color="rgb(120, 73, 28)"
   }
   else if (this.selected=="grey"){
    this.bgColor="grey"
    this.color='blue';
    document.body.style.color="rgb(120, 73, 98)"
   }
   else if(this.selected=="aqua"){
    this.bgColor="aqua";
    this.color="red";
    document.body.style.color="rgb(220, 73, 128)"

   }
   else if(this.selected=="lightblue"){
    this.bgColor="lightblue";
    this.color="black";
    document.body.style.color="rgb(190, 193, 228)"
   }
   else if(this.selected=="lawngreen"){{
    this.bgColor="lawngreen";
    this.color="yellow"
    document.body.style.color="rgb(100, 200, 128)"
   }

   }
   else if(this.selected=="reset"){
    this.color=""
    this.bgColor=''

    
   }

     
  }

}
