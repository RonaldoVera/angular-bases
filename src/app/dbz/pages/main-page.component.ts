import { Component } from '@angular/core';
import { Character } from '../interfaces/charanter.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  public characters:Character[] = [{
    name:'Krillin',
    power: 1000
  },
  {
    name:'Goku',
    power:9500
  },
  {
    name:'Vegueta',
    power: 7500
  }];


  onNewCharacter(characte:Character):void{
    //aqui se añaden los personajes
    this.characters.push(characte);
  }

  onDeletCharacter (index:number) {
    this.characters.splice(index, 1);
  }
}