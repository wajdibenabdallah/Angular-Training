import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appColor]',
})
export class ColorDirective {
  constructor(public element: ElementRef) {
    this.element.nativeElement.style.color = 'yellow';
  }


  @HostListener('mouseenter') onEnter() {
    this.element.nativeElement.style.color = 'blue';
  }

  @HostListener('mouseleave') onLeave() {
    this.element.nativeElement.style.color = 'red';
  }
}
