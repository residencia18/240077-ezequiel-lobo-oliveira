// src/app/app.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  categoriaSelecionada: string | null = null;
  veiculoSelecionado: any | null = null;
  propriedadeSelecionada: string | null = null;

  // Dados JSON fornecidos
  veiculos = {
    Avioes: [
      {
        Name: "Supermarine Spitfire",
        Model: "Mk V",
        Engine: "Rolls-Royce Merlin",
        NumberOfPassengers: 1,
        Autonomia: "470 miles",
        Alcance: "1,135 miles",
        Teto: "36,500 ft"
      },
      {
        Name: "P-51 Mustang",
        Model: "D",
        Engine: "Packard V-1650-7",
        NumberOfPassengers: 1,
        Autonomia: "1,650 miles",
        Alcance: "2,300 miles",
        Teto: "41,900 ft"
      },
      {
        Name: "B-17 Flying Fortress",
        Model: "G",
        Engine: "Wright R-1820-97",
        NumberOfPassengers: 10,
        Autonomia: "2,000 miles",
        Alcance: "3,750 miles",
        Teto: "35,600 ft"
      }
    ],
    Carros: [
      {
        Name: "Tesla Model S",
        Model: "2022",
        Engine: "Electric",
        NumberOfPassengers: 5,
        Autonomia: "390 miles",
        Alcance: "N/A"
      },
      {
        Name: "Ford Mustang",
        Model: "2021",
        Engine: "5.0L Ti-VCT V8",
        NumberOfPassengers: 4,
        Autonomia: "N/A",
        Alcance: "N/A"
      },
      {
        Name: "Chevrolet Camaro",
        Model: "2022",
        Engine: "6.2L Supercharged V8",
        NumberOfPassengers: 4,
        Autonomia: "N/A",
        Alcance: "N/A"
      }
    ],
    Barcos: [
      {
        Name: "Ferretti Yachts",
        Model: "670",
        Engine: "2 x MAN V8-1000",
        NumberOfPassengers: 12,
        Autonomia: "N/A",
        Alcance: "N/A"
      },
      {
        Name: "Azimut Grande",
        Model: "25 Metri",
        Engine: "2 x MAN V12-1800",
        NumberOfPassengers: 10,
        Autonomia: "N/A",
        Alcance: "N/A"
      },
      {
        Name: "Sunseeker Predator",
        Model: "57",
        Engine: "Twin Volvo Penta D13-900",
        NumberOfPassengers: 6,
        Autonomia: "N/A",
        Alcance: "N/A"
      }
    ]
  };
  veiculosSelecionados: any[] = [];

  selecionarCategoria(categoria: string): void {
    this.categoriaSelecionada = categoria;
  }

  selecionarVeiculo(veiculo: any): void {
    this.veiculoSelecionado = { ...veiculo };
    this.propriedadeSelecionada = null;
  }

  selecionarPropriedade(propriedade: string): void {
    this.propriedadeSelecionada = propriedade;
  }
}