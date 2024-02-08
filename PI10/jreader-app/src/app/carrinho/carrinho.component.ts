// src/app/carrinho/carrinho.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent {
  @Input() veiculosSelecionados: any[] = [];

  removerVeiculo(index: number): void {
    if (this.veiculosSelecionados[index]) {
      console.log(`Removido: ${this.veiculosSelecionados[index].Name}`);
      this.veiculosSelecionados.splice(index, 1);
    }
  }
}
