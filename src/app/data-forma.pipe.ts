import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dataForma',
  standalone: true
})
export class DataFormaPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
