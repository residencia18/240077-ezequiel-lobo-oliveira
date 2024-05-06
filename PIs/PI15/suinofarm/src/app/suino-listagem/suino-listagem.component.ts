import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core'; // Importando módulo OnDestroy
import { SuinoService } from '../services/suino.service';
import { Suino } from '../models/suino.model';
import { HistoricoPeso } from '../models/peso.model';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-suino-listagem',
  templateUrl: './suino-listagem.component.html',
  styleUrls: ['./suino-listagem.component.css']
})
export class SuinoListagemComponent implements OnInit, AfterViewInit, OnDestroy { // Implementando OnDestroy
  suinos: Suino[] = [];
  suinosFiltrados: Suino[] = [];
  filtro: any = {};
  suinoSelecionado: Suino | null = null;
  editando: boolean = false;
  exibirControlePeso: boolean = false;
  pesos: number[] = [];
  datas: string[] = [];
  @ViewChild('pesosChart') pesosChartRef: ElementRef | undefined;
  chart: Chart | null = null; // Variável para armazenar o gráfico

  constructor(private suinoService: SuinoService) { }

  ngOnInit(): void {
    this.carregarSuinos();
  }

  ngOnDestroy(): void { // Método para destruir o gráfico ao sair do componente
    if (this.chart) {
      this.chart.destroy();
    }
  }

  ngAfterViewInit(): void {
    if (this.exibirControlePeso && this.pesosChartRef) {
      this.renderizarGrafico();
    }
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
    // Define o suíno selecionado para edição e ativa o modo de edição
    this.suinoSelecionado = suino;
    this.editando = true;
  }

  salvarEdicao(): void {
    if (this.suinoSelecionado) {
      this.suinoService.updateSuino(this.suinoSelecionado)
        .then(() => {
          console.log('Suíno editado com sucesso.');
          this.carregarSuinos();
          // Desativa o modo de edição após salvar as alterações
          this.editando = false;
          this.suinoSelecionado = null; // Limpa o suíno selecionado
        })
        .catch(error => console.error('Erro ao editar suíno:', error));
    }
  }

  cancelarEdicao(): void {
    this.suinoSelecionado = null;
    this.editando = false;
  }

  excluirSuino(suino: Suino): void {
    this.suinoService.excluirSuino(suino)
      .then(() => {
        console.log('Suíno excluído com sucesso.');
        this.suinos = this.suinos.filter(item => item !== suino);
      })
      .catch(error => console.error('Erro ao excluir suíno:', error));
  }

  mostrarControlePeso(suino: Suino): void {
    this.pesos = [];
    this.datas = [];

    this.suinoService.getPeso(suino.brinco.toString()).subscribe((historicoPesos: HistoricoPeso[]) => {
      historicoPesos.forEach(item => {
        this.pesos.push(item.peso);
        this.datas.push(item.dataPesagem.toString());
      });
      this.suinoSelecionado = suino;
      this.exibirControlePeso = true;
      setTimeout(() => {
        this.renderizarGrafico();
      });
    });
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

  renderizarGrafico(): void {
    if (this.pesosChartRef && this.pesosChartRef.nativeElement) {
      const ctx = this.pesosChartRef.nativeElement.getContext('2d');

      // Destrói o gráfico existente se houver
      if (this.chart) {
        this.chart.destroy();
      }

      // Cria um novo gráfico
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.datas,
          datasets: [{
            label: 'Peso',
            data: this.pesos,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  }
}
