import { Component, OnInit, ViewEncapsulation, Input, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-button',
  template: `







  <button (click)="handleClick()" > {{label}} </button>

  `,
  styles: [
  ],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class ButtonComponent implements OnInit {

  constructor() { }


  @Input() label : string;
  @Output() action : any = new EventEmitter();

  private numberofclicks = 0;

  ngOnInit(): void {
  }

  handleClick(){
    this.numberofclicks++;
    this.action.emit(this.numberofclicks);
  }

}
