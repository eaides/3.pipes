import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {

  transform(value: string, all_worlds = true): any {
    value = value.toLowerCase();
    const worlds = value.split(' ');
    for ( let i in worlds ) {
      worlds[i] = worlds[i][0].toUpperCase() + worlds[i].substr(1);
      if (!all_worlds) {
        break;
      }
    }
    return worlds.join(' ');
  }

}
