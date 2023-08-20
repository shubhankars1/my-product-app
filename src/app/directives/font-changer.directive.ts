import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appFontChanger]'
})
export class FontChangerDirective {

  constructor(
    private elRef:ElementRef
    ) { 
      elRef.nativeElement.style.fontSize='30px'
    }
    
}
