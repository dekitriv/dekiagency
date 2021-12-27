import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'textCut'
})
export class TextCutPipe implements PipeTransform {

  transform(value: string): string {
    if (value.length > 20){
      return value.substr(0, 50) + '...';
    }
    return value;
  }
}
