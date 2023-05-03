import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chart'
})
export class ChartPipe implements PipeTransform {

  transform(value: any, searchterm?: any): any {
    if (!value) return null
    if (!searchterm) return value
    searchterm = searchterm.toLowerCase();
    return value.filter(function (val: any): any {
      return JSON.stringify(val).toLocaleLowerCase().includes(searchterm)
    });
  }

}
