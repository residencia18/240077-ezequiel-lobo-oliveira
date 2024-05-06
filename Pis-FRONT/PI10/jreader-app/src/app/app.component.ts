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
  }

  carregarVeiculos(): void {
    this.communicationService.getVeiculos().subscribe((data: any) => { 
      this.categorias = Object.keys(data);
      this.veiculos = data;
    });
  }

  selecionarCategoria(categoria: string): void {
    this.categoriaSelecionada = categoria;
    this.veiculosCategoriaSelecionada = this.veiculos[categoria];
    this.veiculoSelecionado = null;
    this.propriedadeSelecionada = null;
  }

  selecionarVeiculo(veiculo: any): void {
    this.veiculoSelecionado = { ...veiculo };
    this.propriedadesVeiculoSelecionado = Object.keys(veiculo);
    this.propriedadeSelecionada = null;
  }

  selecionarPropriedade(propriedade: string): void {
    this.propriedadeSelecionada = propriedade;
    this.valorPropriedade = this.veiculoSelecionado[propriedade];
  }

  addToFooter(): void {
    if (this.veiculoSelecionado) {
      this.selectedVehicles.push({ ...this.veiculoSelecionado });
      this.updateSelectedVehiclesJSON();
    }
  }

  updateSelectedVehiclesJSON(): void {
    console.log('Atualizando JSON com veículos selecionados:', this.selectedVehicles);
  }
}
