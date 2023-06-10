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
  public onDelet:EventEmitter<string> = new EventEmitter()

  onDeleteCharacter(id?:string) {

    if (!id) return;

    console.log({id});


    this.onDelet.emit(id);
  }
}
