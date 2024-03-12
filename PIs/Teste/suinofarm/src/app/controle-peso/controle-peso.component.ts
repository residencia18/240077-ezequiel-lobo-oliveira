import { Component, Input, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js';

@Component({
  selector: 'app-controle-peso',
  templateUrl: './controle-peso.component.html',
  styleUrls: ['./controle-peso.component.css']
})
export class ControlePesoComponent implements OnInit {
  @Input() pesos: number[] = []; // Inicialize a propriedade pesos como um array vazio
  @Input() datas: string[] = []; // Inicialize a propriedade datas como um array vazio


  constructor() { }

  ngOnInit(): void {
    // Registrando módulos necessários do Chart.js
    Chart.register(...registerables);

    // Configuração do gráfico
    const ctx = document.getElementById('pesoChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: this.datas,
        datasets: [{
          label: 'Peso',
          data: this.pesos,
          fill: false,
          borderColor: 'rgb(75, 192, 192)',
          tension: 0.1
        }]
      },
      options: {
        scales: {
          y: {
            title: {
              display: true,
              text: 'Peso'
            }
          },
          x: {
            title: {
              display: true,
              text: 'Data'
            }
          }
        }
      }
    });
  }
}
