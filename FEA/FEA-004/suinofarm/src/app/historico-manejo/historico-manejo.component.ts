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
  

  // Dentro do método carregarHistoricoManejos em HistoricoManejoComponent
  carregarHistoricoManejos(): void {
    this.manejoService.getHistoricoManejos().subscribe((manejos: ManejoSanitario[]) => {
      console.log("Dados obtidos do Firebase:", manejos);
  
      this.historicoManejos = manejos.map(manejo => {
        // Cria uma cópia das atividades realizadas sem modificá-las
        const atividadesRealizadasCopy: { [brinco: string]: string[] } = {};
        Object.keys(manejo.atividadesRealizadas).forEach(brinco => {
          atividadesRealizadasCopy[brinco] = [...manejo.atividadesRealizadas[brinco]];
        });
        return { ...manejo, atividadesRealizadas: atividadesRealizadasCopy };
      });
  
      console.log("Histórico de manejo sanitário:", this.historicoManejos);
  
      this.atividades = this.extrairAtividades(this.historicoManejos);
      console.log("Atividades extraídas:", this.atividades);
    });
  }
  

  
  criarEstadoAtividades(atividades: string[]): string[] {
    const estadoAtividades: string[] = [];
    
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

  salvarAtividades(manejo: ManejoSanitario): void {
    if (manejo.id) { // Verifica se manejo.id é válido
      this.manejoService.atualizarAtividades(manejo.id, manejo.atividadesRealizadas).then(() => {
        console.log('Atividades atualizadas com sucesso.');
      }).catch(error => {
        console.error('Erro ao atualizar atividades:', error);
      });
    } else {
      console.error('ID do manejo inválido:', manejo.id);
    }
  }
  
  




}
