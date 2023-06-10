import { Injectable } from '@angular/core';

import { v4 as uuid  } from "uuid"; //!este es un jenerador de id automaticos
import { Character } from '../interfaces/charanter.interface';




@Injectable({
  providedIn: 'root' //!el provaidein:'root', es para hacer un sigleton en toda la aplicación
})
export class DbzService {

  public characters:Character[] = [{
    id: uuid(),
    name:'Krillin',
    power: 1000
  },
  {
    id: uuid(),
    name:'Goku',
    power:9500
  },
  {
    id: uuid(),
    name:'Vegueta',
    power: 7500
  }];


  addCharacter(character:Character):void{

    const newCharacter: Character = { id:uuid(), ...character };
    //aqui se añaden los personajes
    this.characters.push(newCharacter);
  }

  // onDeletCharacter (index:number) {
  DeletCharacterById (id:string) {
    this.characters = this.characters.filter( character => character.id !== id)
  }

  // this.characters.splice(index, 1);
}
