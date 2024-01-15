// src/diretivas/estilizar-veiculos.directive.ts
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appEstilizarVeiculos]'
})
export class EstilizarVeiculosDirective {
  @Input() cor: string = 'green';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.cor);
  }
}
