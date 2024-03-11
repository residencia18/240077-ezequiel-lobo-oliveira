import { Component, OnInit } from '@angular/core';
import { SuinoService } from '../services/suino.service';
import { Suino } from '../models/suino.model';

@Component({
  selector: 'app-suino-listagem',
  templateUrl: './suino-listagem.component.html',
  styleUrls: ['./suino-listagem.component.css']
})
export class SuinoListagemComponent implements OnInit {
  suinos: Suino[] = [];
  suinosFiltrados: Suino[] = [];
  filtro: any = {};

  constructor(private suinoService: SuinoService) { }

  ngOnInit(): void {
    this.carregarSuinos();
  }

  carregarSuinos(): void {
    this.suinoService.getSuinos().subscribe(suinos => {
      this.suinos = suinos;
      this.aplicarFiltro();
    });
  }

  calcularIdade(dataNascimento: Date): string {
    const hoje = new Date();
    const nascimento = new Date(dataNascimento);
    const diff = hoje.getTime() - nascimento.getTime();
    const meses = diff / (1000 * 60 * 60 * 24 * 30);
    return meses.toFixed(0) + ' meses';
  }

  editarSuino(suino: Suino): void {
    console.log('Editar suíno com ID:', suino.brinco);
    // Implemente aqui a lógica para a edição do suíno
  }

  deletarSuino(brinco: string): void {
    // Implemente aqui a lógica para a exclusão do suíno
    this.suinoService.deleteSuino(brinco)
      .then(() => {
        // Atualizar a lista de suínos após a exclusão
        this.carregarSuinos();
        console.log('Suíno deletado com sucesso');
      })
      .catch(error => console.error('Erro ao deletar suíno:', error));
  }
  
  
  
  

  aplicarFiltro(): void {
    this.suinosFiltrados = this.suinos.filter(suino => {
      let passouFiltro = true;

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
    this.filtro = {};
    this.aplicarFiltro();
  }
}
