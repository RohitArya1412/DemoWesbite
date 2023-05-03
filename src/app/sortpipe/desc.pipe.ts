import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'desc'
})
export class DescPipe implements PipeTransform {

  transform(value:any):any {
    return value.sort((a:any,b:any)=>{
      let x= a.name.toLocaleLowerCase();
      let y= b.name.toLocaleLowerCase();
      if(x<y){
        return 1   
        
      }else{
        return -1;
      }
     
    })
  }

}
