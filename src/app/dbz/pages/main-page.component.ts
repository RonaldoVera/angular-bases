import { Component } from '@angular/core';

import { DbzService } from '../services/dbz.service';
import { Character } from '../interfaces/charanter.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {

  constructor(  private dbzServis:DbzService ){} //!en el construtor se hace la iyeccion se las dependencias

  //!aqui creamos los metodos para colocar privada la inyeccion de dependecia ya que es una buena practica

  get Characters ():Character [] {
    return [...this.dbzServis.characters];
  }


  onDeleteCharacter ( id: string ):void{
    this.dbzServis.DeletCharacterById( id );
  }

  onNewCharacter(Character:Character):void {
    this.dbzServis.addCharacter(Character);
  }

}
