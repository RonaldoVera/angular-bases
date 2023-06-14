import { Injectable } from '@angular/core';

import { v4 as uuid  } from "uuid"; //!este es un jenerador de id automaticos
import { Character } from '../interfaces/charanter.interface';




@Injectable({
  providedIn: 'root' //!el provaidein:'root', es para hacer un sigleton en toda la aplicación
})
export class DbzService {

  public characters:Character[] = [{
    id: uuid(),
    name:'naikaris me gustas ',
    power: 1000
  },
  {
    id: uuid(),
    name:'eres una niña unica😍💕',
    power:1000
  },
  {
    id: uuid(),
    name:'no existen dos como tu <3',
    power: 1000
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
