import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'purePipe'
})
export class PurePipePipe implements PipeTransform {

  transform(value: any):any {
    return value.value*2;
  }

}
