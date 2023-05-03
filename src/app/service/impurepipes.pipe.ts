import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'impurepipes',pure:false
})
export class ImpurepipesPipe implements PipeTransform {

  transform(value:any):any {
    return value.value   * 2;
  
  }

}
