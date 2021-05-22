import { Directive , ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  
  constructor(private element : ElementRef) {}
  @HostListener('mouseover')
  onMouseOver() {
    this.element.nativeElement.style.transform= 'scale(1.06, 1.06)';
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.element.nativeElement.style.transform =  '';
  }

}

