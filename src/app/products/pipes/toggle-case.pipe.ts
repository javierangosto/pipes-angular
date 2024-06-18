import { Pipe, PipeTransform } from '@angular/core';

// javier | toggleCase = "JAVIER"
// JAVIER | toggleCase = "javier"

@Pipe({
  name: 'toggleCase'
})

export class ToggleCasePipe implements PipeTransform {
  transform(value: string, toUpper: boolean = false):string {
    return toUpper
      ? value.toUpperCase()
      : value.toLowerCase();
  }


}
