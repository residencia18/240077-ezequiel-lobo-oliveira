import { Component, OnInit } from '@angular/core';
import { SuinoService } from '../services/suino.service';
import { Suino } from '../models/suino.model';

@Component({
  selector: 'app-suino-listagem',
  templateUrl: './suino-listagem.component.html',
  styleUrls: ['./suino-listagem.component.css']
})
export class SuinoListagemComponent implements OnInit {
  suinos: Suino[] = []; // Inicialize a propriedade suinos como um array vazio
  suinosFiltrados: Suino[] = []; // Inicialize a propriedade suinosFiltrados também

  filtro: any = {}; // Objeto para armazenar os filtros

  constructor(private suinoService: SuinoService) { }

  ngOnInit(): void {
    this.carregarSuinos();
  }

  carregarSuinos(): void {
    this.suinoService.getSuinos().subscribe(suinos => {
      this.suinos = suinos;
      this.aplicarFiltro(); // Aplica o filtro inicial ao carregar os suínos
    });
  }

  calcularIdade(dataNascimento: Date): string {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    const diff = hoje.getTime() - nascimento.getTime();
    const meses = diff / (1000 * 60 * 60 * 24 * 30);
    return meses.toFixed(0) + ' meses';
  }

  editarSuino(id: number): void {
    // Converta o número para uma string antes de passá-lo como argumento
    console.log('Editar suíno com ID:', id.toString());
  }

  deletarSuino(id: number): void {
    // Converta o número para uma string antes de passá-lo como argumento
    console.log('Deletar suíno com ID:', id.toString());
  }

  aplicarFiltro(): void {
    // Filtra os suínos com base nos filtros fornecidos
    this.suinosFiltrados = this.suinos.filter(suino => {
      let passouFiltro = true;

      // Verifica cada filtro individualmente
      if (this.filtro.brincoPai && suino.brincoPai !== this.filtro.brincoPai) {
        passouFiltro = false;
      }

      if (this.filtro.brincoMae && suino.brincoMae !== this.filtro.brincoMae) {
        passouFiltro = false;
      }

      if (this.filtro.dataNascimento && suino.dataNascimento !== this.filtro.dataNascimento) {
        passouFiltro = false;
      }

      if (this.filtro.dataSaida && suino.dataSaida !== this.filtro.dataSaida) {
        passouFiltro = false;
      }

      if (this.filtro.sexo && suino.sexo !== this.filtro.sexo) {
        passouFiltro = false;
      }

      if (this.filtro.status && suino.status !== this.filtro.status) {
        passouFiltro = false;
      }

      return passouFiltro;
    });
  }

  limparFiltro(): void {
    // Limpa os filtros
    this.filtro = {};
    this.aplicarFiltro(); // Aplica o filtro limpo aos suínos
  }
}
