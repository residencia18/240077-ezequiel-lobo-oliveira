// src/diretivas/estilizar-categorias.directive.ts
import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appEstilizarCategorias]'
})
export class EstilizarCategoriasDirective {
  @Input() cor: string = 'blue';

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this.el.nativeElement, 'color', this.cor);
  }
}
