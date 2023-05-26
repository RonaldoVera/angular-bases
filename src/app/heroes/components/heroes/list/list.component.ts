import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroName:string[]=['Spiderman', 'Ironman', 'Hulk', 'She Hulk', 'Thor'];
  public deletHero?:string;

  removeLastHero():void {
     this.deletHero =  this.heroName.pop();
    console.log(this.deletHero);
  }

}
