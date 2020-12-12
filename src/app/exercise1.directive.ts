import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appExercise1]'
})
export class Exercise1Directive {

  constructor() { }

  @HostBinding('class.greenBlock') greenBlock = false;
  @HostBinding('style.font-size') fontSize;
  @HostBinding('style.color') color;

  @HostListener('click') function(): void{
    this.greenBlock = !this.greenBlock;
    this.fontSize = '24px';
    this.color = 'aqua';
  }

}
