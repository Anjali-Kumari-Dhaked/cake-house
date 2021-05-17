import { Directive , ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  // 
  constructor(private element : ElementRef) {
//     console.log("this element", this.element)
//     this.htmlelement = this.element.nativeElement
//     // this.htmlelement.style.color = "yellow"
//     // this.htmlelement.className = "alert alert-success"
//     this.htmlelement.classList.add("btn")
//     this.htmlelement.classList.add("btn-primary")
//     console.log("...jjh")
  }
//  @HostListener('mouseenter') redcolor(){
//    this.htmlelement.style.color = this.entercolor
//  }
//  @HostListener('mouseleave') yellowcolor(){
//   this.htmlelement.style.color = this.leavecolor
//  }
}

