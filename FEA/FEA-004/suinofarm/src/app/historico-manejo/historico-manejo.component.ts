import { Component, OnInit } from '@angular/core';
import { ManejoSanitario } from '../models/manejo-sanitario.model';
import { ManejoSanitarioService } from '../services/manejo-sanitario.service';

@Component({
  selector: 'app-historico-manejo',
  templateUrl: './historico-manejo.component.html',
  styleUrls: ['./historico-manejo.component.css']
})
export class HistoricoManejoComponent implements OnInit {
  historicoManejos: ManejoSanitario[] = [];
  atividades: string[] = [];

  constructor(private manejoService: ManejoSanitarioService) { }

  ngOnInit(): void {
    this.carregarHistoricoManejos();
  }

  carregarHistoricoManejos(): void {
    this.manejoService.getHistoricoManejos().subscribe((manejos: ManejoSanitario[]) => {
      this.historicoManejos = manejos.map(manejo => {
        const atividadesRealizadas: { [brinco: string]: { [atividade: string]: boolean } } = {};
        manejo.brincos.forEach((brinco: string) => {
          atividadesRealizadas[brinco] = this.criarEstadoAtividades(manejo.atividades);
        });
        return { ...manejo, atividadesRealizadas };
      });
      
      this.atividades = this.extrairAtividades(this.historicoManejos);
    });
  }
  
  criarEstadoAtividades(atividades: string[]): { [key: string]: boolean } {
    const estadoAtividades: { [key: string]: boolean } = {};
    atividades.forEach(atividade => estadoAtividades[atividade] = false);
    return estadoAtividades;
  }
  
  toggleAtividade(manejo: ManejoSanitario, brinco: string, atividade: string): void {
    if (manejo.atividadesRealizadas[brinco].hasOwnProperty(atividade)) {
      manejo.atividadesRealizadas[brinco][atividade] = !manejo.atividadesRealizadas[brinco][atividade];
    }
  }

  extrairAtividades(manejos: ManejoSanitario[]): string[] {
    const atividades: string[] = [];
    manejos.forEach(manejo => {
      manejo.atividades.forEach(atividade => {
        if (!atividades.includes(atividade)) {
          atividades.push(atividade);
        }
      });
    });
    return atividades;
  }
}
