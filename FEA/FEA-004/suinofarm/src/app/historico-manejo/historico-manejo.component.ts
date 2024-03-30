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
        const atividadesRealizadas: { [brinco: string]: string[] } = {};
        manejo.brincos.forEach((brinco: string) => {
          atividadesRealizadas[brinco] = this.criarEstadoAtividades(manejo.atividades);
        });
        return { ...manejo, atividadesRealizadas };
      });
      
      this.atividades = this.extrairAtividades(this.historicoManejos);
    });
  }
  
  criarEstadoAtividades(atividades: string[]): string[] {
    const estadoAtividades: string[] = [];
    atividades.forEach(() => estadoAtividades.push('Não'));
    return estadoAtividades;
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
