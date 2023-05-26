import { Component } from '@angular/core';


@Component({
  selector: 'app-Counter',
  template: `

  <h3>caunter {{caunter}} </h3>

  <button (click)="icreasseby(+1)">+1</button>
  <button (click)="icreasseby(-1)">-1</button>
  <button (click)="resetCaunter()">Reset</button>

  `
})

export class CounterComponent {
  public caunter: number = 10;
  constructor() { }
  //metodo para incrementar y decrementar el caunter
  public icreasseby (value:number):void{
    this.caunter += value;
  }
  //metodo para resetear el caunter
  public resetCaunter ():void{
    this.caunter = 10;
  }

}
