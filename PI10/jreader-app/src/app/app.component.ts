// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { CommunicationService } from './services/communication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  categorias: string[] = [];
  categoriaSelecionada: string | null = null;
  veiculos: any = {};
  veiculosCategoriaSelecionada: any[] = [];
  veiculoSelecionado: any | null = null;
  propriedadesVeiculoSelecionado: string[] = [];
  propriedadeSelecionada: string | null = null;
  valorPropriedade: any;
  selectedVehicles: any[] = [];

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.carregarVeiculos();
    this.communicationService.categoriaSelecionada$.subscribe(categoria => {
      this.selecionarCategoria(categoria);
    });
    this.communicationService.veiculoSelecionado$.subscribe(veiculo => {
      this.selecionarVeiculo(veiculo);
    });
  }

  carregarVeiculos(): void {
    // Supondo que você tenha a lógica para carregar os veículos do serviço JsonReaderService
  }

  selecionarCategoria(categoria: string): void {
    this.categoriaSelecionada = categoria;
    // Supondo que você tenha a lógica para selecionar os veículos da categoria
  }

  selecionarVeiculo(veiculo: any): void {
    this.veiculoSelecionado = { ...veiculo };
    // Supondo que você tenha a lógica para selecionar as propriedades do veículo
  }

  selecionarPropriedade(propriedade: string): void {
    this.propriedadeSelecionada = propriedade;
    this.valorPropriedade = this.veiculoSelecionado[propriedade];
  }

  addToFooter(): void {
    if (this.veiculoSelecionado) {
      this.selectedVehicles.push({ ...this.veiculoSelecionado });
      // Supondo que você tenha a lógica para atualizar o JSON com os veículos selecionados
      console.log('Atualizando JSON com veículos selecionados:', this.selectedVehicles);
    }
  }
}
