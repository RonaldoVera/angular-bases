import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/charanter.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  //!aqui le agregamos un valor por defecto que es 'Trunk'
  public characterlist:Character [] = [{
    name:'Trunk',
    power:10
  }]


  @Output()
  public onDelet:EventEmitter<number> = new EventEmitter()

  onDeleteCharacter(index:number):void {
    //TODO Emitir el ID del personaje
    this.onDelet.emit(index);
  }
}
