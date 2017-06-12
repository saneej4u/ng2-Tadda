import { Pipe, PipeTransform } from '@angular/core';
import { Enduser} from './enduser.model';

@Pipe({
  name: 'enduserfilter'
})
export class EnduserfilterPipe implements PipeTransform {

  transform(value: any, filterQuery: string): any {
    if (value.length === 0 || filterQuery === '') {
      return value;
    }
    const resultArray = [];
    for (let item of value) {
      if (item.FirstName.toLowerCase().includes(filterQuery.toLowerCase())
        || item.LastName.toLowerCase().includes(filterQuery.toLowerCase()) 
        || item.EmailAddress.toLowerCase().includes(filterQuery.toLowerCase())) {

        resultArray.push(item);
      }
    }
    return resultArray;
  }

}
