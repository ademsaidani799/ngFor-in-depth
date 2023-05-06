import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strtoar'
})
export class StrtoarPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): string[] {
    return value.split("");
  }

}
