import { Component } from '@angular/core';
import { DataService } from '../store/data.service';

@Component({
  selector: 'app-inputdata',
  templateUrl: './inputdata.component.html',
  styleUrls: ['./inputdata.component.css']
})
export class InputdataComponent {
  vldata: any[]=[];
  

  constructor(private vl:DataService){
    this.vldata=this.vl.setdata()
    console.log(this.vldata);
    

  }
  delData(vl:any){
    this.vldata.filter((val:any,index:any)=>{
      if(index==vl.target.value){
        this.vldata.splice(index,1);
        
      }
    })   
    
  }

}
