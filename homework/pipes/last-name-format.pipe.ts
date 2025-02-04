import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'lastNameFormat'
})
export class LastNameFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) { return value; }
    // Az első két karakter nagybetűs, a többi változatlan
    return value.slice(0, 2).toUpperCase() + value.slice(2);
  }
}
