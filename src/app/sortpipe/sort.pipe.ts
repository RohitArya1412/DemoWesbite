import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
     return value.sort((a:any,b:any)=>{
      let x= a.name.toLocaleLowerCase();
      let y= b.name.toLocaleLowerCase();
      if(x<y){
        return -1   
        
      }else{
        return 1;
      }
     
    })
    
  }

}
