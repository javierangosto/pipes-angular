import { Pipe, PipeTransform } from '@angular/core';

// javier | toggleCase = "JAVIER"
// JAVIER | toggleCase = "javier"

@Pipe({
  name: 'canFly'
})

export class CanFlyPipe implements PipeTransform {
  transform(canFly: boolean = false):"yes" | "no" {
    return canFly
      ? "yes"
      : "no";
  }


}
