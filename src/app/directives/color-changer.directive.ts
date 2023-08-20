import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appColorChanger]'
})
export class ColorChangerDirective {

  constructor(
    private elRef:ElementRef
  ) { 
    this.elRef.nativeElement.style.background="greenyellow";
        this.elRef.nativeElement.style.color="red";
  }

}
