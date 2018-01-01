import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, passwordActive: boolean = true): string {
    if (passwordActive) {
      let output_str = '';
      for ( let i = 0; i < value.length; i++) {
          output_str += '*';
      }
      // return '***********';
      return output_str;
    }
    return value;
  }

}
