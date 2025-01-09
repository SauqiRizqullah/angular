import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateFormat',
  standalone: true
})
export class DateFormatPipe implements PipeTransform {

  transform(value: any){
    const formatDate = new Date(value).toLocaleString('en-US', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
      second: '2-digit',
      hour: '2-digit',
      minute: '2-digit'
    })
    return formatDate;
  }

}
