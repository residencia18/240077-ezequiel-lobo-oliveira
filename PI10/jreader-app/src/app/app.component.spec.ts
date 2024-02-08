// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { JsonReaderService } from './services/json-reader.service';

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

  constructor(private jsonReaderService: JsonReaderService) {}

  ngOnInit(): void {
    this.carregarVeiculos();
  }

  carregarVeiculos(): void {
    this.jsonReaderService.getVeiculos().subscribe((data) => {
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
    // Lógica para atualizar o arquivo JSON com os veículos selecionados
    // Essa lógica dependerá de como você está gerenciando ou armazenando os dados.
    // Você pode usar o serviço HTTP para fazer uma solicitação à sua API e armazenar os dados no banco de dados.
    console.log('Atualizando JSON com veículos selecionados:', this.selectedVehicles);
  }
}
