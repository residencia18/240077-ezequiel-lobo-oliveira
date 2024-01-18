// src/app/app.component.ts
import { Component, OnInit } from '@angular/core';
import { JsonReaderService } from './services/json-reader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  categorias: string[] = [];
  categoriaSelecionada: string | null = null;
  veiculos: any = {};
  veiculosCategoriaSelecionada: any[] = [];
  veiculoSelecionado: any | null = null;
  propriedadesVeiculoSelecionado: string[] = [];
  propriedadeSelecionada: string | null = null;
  valorPropriedade: any;

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
}
