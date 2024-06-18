import { Pipe, PipeTransform } from '@angular/core';
import { Color } from '../interfaces/hero.interface';

// javier | toggleCase = "JAVIER"
// JAVIER | toggleCase = "javier"

@Pipe({
  name: 'color'
})

export class ColorPipe implements PipeTransform {
  transform(color:Color): string {
    switch (color) {
      case Color.black:
        return "black (" + Color.black + ")";
      case Color.blue:
        return "blue (" + Color.blue + ")";
      case Color.green:
        return "green (" + Color.green + ")";
      case Color.red:
        return "red (" + Color.red + ")";
    }
  }


}
