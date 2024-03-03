import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from './Services/atendimento.service';
import { Atendimento } from './Models/atendimento.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  listaAtendimentos: Atendimento[] = []; // Defina a propriedade listaAtendimentos

  constructor(private atendimentoService: AtendimentoService) {}

  ngOnInit(): void {
    this.carregarAtendimentos();
  }

  carregarAtendimentos() {
    this.atendimentoService.listarAtendimentos()
      .subscribe((data: Atendimento[]) => {
        this.listaAtendimentos = data;
      }, (error: any) => {
        console.error('Erro ao carregar atendimentos:', error);
        // Tratar erro (exibir mensagem de erro, etc.)
      });
  }
}
