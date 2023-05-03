import { AfterContentChecked, Output,EventEmitter, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input,OnChanges,OnDestroy,OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-onchange',
  templateUrl: './onchange.component.html',
  styleUrls: ['./onchange.component.css']
})
export class OnchangeComponent implements OnInit,OnChanges,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {
  constructor(){
    console.log("constructor Called");
  }
  show:any
  @Input()
  onChange:string="Hello";
  @Output()myOutput:EventEmitter<string>=new EventEmitter();
  
   ngOnInit(): void {
     console.log("ngOninit called");     
   }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("ngOnChanges is called");
    console.log(changes);    
  }
  ngDoCheck(): void {
    console.log("ngDoCheck called");   
  }
ngAfterContentInit(): void {
  console.log("ngAfterContentInit is called");  
   
}
ngAfterContentChecked(): void {
  console.log("ngAfterContentChecked is Called",this.onChange); 
  this.show=this.onChange; 
}
ngAfterViewInit(): void {
  console.log("ngAfterViewInit Called");  
}
ngAfterViewChecked(): void {
  console.log("ngAfterViewChecked called");
  
}
ngOnDestroy(): void {
  console.log("ngOnDestroy called");  
}
sendData(val:any){
this.myOutput.emit(val.value);
}
}
