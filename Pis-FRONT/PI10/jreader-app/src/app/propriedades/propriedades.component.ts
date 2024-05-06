// propriedades.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrls: ['./propriedades.component.css']
})
export class PropriedadesComponent {
  @Input() veiculoSelecionado: any | null = null;
  @Input() propriedadesVeiculoSelecionado: string[] = [];
  @Input() propriedadeSelecionada: string | null = null;
  @Input() valorPropriedade: any;

  selecionarPropriedade(propriedade: string): void {
    this.propriedadeSelecionada = propriedade;
  }
}
