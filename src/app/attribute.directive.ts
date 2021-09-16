import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appAttribute]'
})
export class AttributeDirective {

  constructor() { }

  @HostListener('mouseevent1') changeBgColor() {
    // change background color on hover to teal
    // change text color on hover to white
  }

  @HostListener('mouseevent2') changeBackBgColor() {
    // change background color on hover to #E0E0E0
    // change text color on hover to black
  }

}
