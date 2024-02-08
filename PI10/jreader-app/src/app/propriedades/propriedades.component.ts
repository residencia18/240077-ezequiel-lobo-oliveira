// src/app/propriedades/propriedades.component.ts
import { Component } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrls: ['./propriedades.component.css']
})
export class PropriedadesComponent {
  propriedades: string[] = [];
  veiculoSelecionado: any | null = null;

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.communicationService.veiculoSelecionado$.subscribe(veiculo => {
      this.veiculoSelecionado = veiculo;
      // Aqui você pode carregar as propriedades do veículo selecionado
      // this.propriedades = this.loadPropriedades(veiculo);
    });
  }

  selecionarPropriedade(propriedade: string): void {
    // Faça o que for necessário com a propriedade selecionada
  }
}
