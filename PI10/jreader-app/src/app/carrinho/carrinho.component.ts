// src/app/carrinho/carrinho.component.ts
import { Component, OnInit } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-carrinho',
  templateUrl: './carrinho.component.html',
  styleUrls: ['./carrinho.component.css']
})
export class CarrinhoComponent implements OnInit {
  veiculosSelecionados: any[] = [];

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.communicationService.veiculoSelecionado$.subscribe((veiculo: any) => {
      if (veiculo) {
        this.veiculosSelecionados.push(veiculo);
      }
    });
  }

  removerVeiculo(index: number): void {
    if (this.veiculosSelecionados[index]) {
      console.log(`Removido: ${this.veiculosSelecionados[index].Name}`);
      this.veiculosSelecionados.splice(index, 1);
    }
  }
}
