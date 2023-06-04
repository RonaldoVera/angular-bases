import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/charanter.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

    @Output()
  public onNewChatacter: EventEmitter<Character>= new EventEmitter()

  public character: Character ={
    name:'',
    power:0
  };

  emitCharacter():void {

    if (this.character.name.length === 0) return;

    this.onNewChatacter.emit(this.character);

    this.character = {name:"", power:0};
  }

}
