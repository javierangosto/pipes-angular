import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'products-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrl: './uncommon-page.component.css'
})
export class UncommonPageComponent {
  //i18n Select
  public name: string = "Javier";
  public gender: "male" | "female" = "male";
  public invitationMap = {
    "female": "to welcome you",
    "male": "to invite you"
  }

  public changePerson(): void {
    this.name = "Melisa"
    this.gender = "female";
  }

  //i18Plural
  public clients: string[] = ["Javier", "Maria", "Pedro", "Fernando", "Hernando", "Eduardo", "Natalia"];
  public clientsMap = {
    "=0": "We don't have any clients waiting",
    "=1": "We have a client waiting",
    "other": "We currently have # clients waiting"
  }

  public serveClient(): void {
    this.clients.shift();
  }

  //KeyValue Pipe
  public person = {
    name: "Javier",
    age: 36,
    address: "Barcelona, Spain"
  }

  //Async Pipe
  public myObservableTimer: Observable<number> = interval(2000) //Crea un observable que emite valores dese 0, 1, 2, etc. según tiempo definido
    .pipe(
      tap(value => console.log("tap: ", value))
    );

  public promiseValue: Promise<string> = new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve("We have data on the promise");
      this.person.name = "Other name";
    }, 3500);
  })
}
