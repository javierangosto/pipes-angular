import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(heroes: Hero[], order: number, sortBy?: keyof Hero | ""): Hero[] {
    switch(sortBy){
      case "name":
        return heroes.sort((a, b) => a.name > b.name ? order*1 : order*-1);
      case "canFly":
        return heroes.sort((a, b) => a.canFly > b.canFly ? order*1 : order*-1);
      case "color":
        return heroes.sort((a, b) => a.color > b.color ? order*1 : order*-1);
      default:
        return heroes;
    }
  }
}
