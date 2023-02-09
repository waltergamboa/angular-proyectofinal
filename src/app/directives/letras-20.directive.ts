import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appLetras20]',
})
export class Letras20Directive {
  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    renderer.setStyle(elementRef.nativeElement, 'font-size', '20px');
  }
}
