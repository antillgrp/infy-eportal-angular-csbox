import { Pipe, PipeTransform } from '@angular/core';

import { Employee } from './emplist/employee';

@Pipe({
  name: 'searchFilterPipe'
})
export class FilterPipe implements PipeTransform {

  transform(value: Employee[], ...args: any[]): Employee[] {
    // filter employee name value based on user input provided in search field
    // console.log(value);
    // console.log(args);
    return  (!args) ?
            value
            :
            value.filter(
              employee => JSON.stringify(employee).includes(args[0])
            );
  }

}
