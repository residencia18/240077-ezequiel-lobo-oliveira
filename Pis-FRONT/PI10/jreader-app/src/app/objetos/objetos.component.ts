// objetos.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrls: ['./objetos.component.css']
})
export class ObjetosComponent {
  @Input() categoriaSelecionada: string | null = null;
  @Input() veiculos: any[] = [];
  @Output() veiculoSelecionado = new EventEmitter<any>();

  selecionarVeiculo(veiculo: any): void {
    this.veiculoSelecionado.emit(veiculo);
  }
}
