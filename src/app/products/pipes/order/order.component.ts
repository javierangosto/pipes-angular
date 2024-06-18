import { Component } from '@angular/core';
import { Color, Hero } from '../../interfaces/hero.interface';

@Component({
  selector: 'products-order',
  templateUrl: './order.component.html'
})
export class OrderComponent {
  public isUpperCase: boolean = false;
  public isAscending: number = -1;
  public sortByValue?: keyof Hero;
  public heroes: Hero[] = [
    {
      name: "Superman",
      canFly: true,
      color: Color.blue
    },
    {
      name: "Batman",
      canFly: false,
      color: Color.black
    },
    {
      name: "Daredevil",
      canFly: false,
      color: Color.red
    },
    {
      name: "Spiderman",
      canFly: false,
      color: Color.red
    },
    {
      name: "Green Latern",
      canFly: true,
      color: Color.green
    }
  ]

  public toggleUperCase():void {
    this.isUpperCase = !this.isUpperCase;
  }

  public sortBy(value: keyof Hero):void {
    this.sortByValue = value;
    this.isAscending *= -1;
  }
}
