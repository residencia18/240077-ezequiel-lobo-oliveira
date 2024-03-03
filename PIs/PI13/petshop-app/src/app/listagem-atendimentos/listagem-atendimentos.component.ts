// listagem-atendimentos.component.ts

import { Component, OnInit } from '@angular/core';
import { AtendimentoService } from '../Services/atendimento.service';
import { Atendimento } from '../Models/atendimento.model';

@Component({
  selector: 'app-listagem-atendimentos',
  templateUrl: './listagem-atendimentos.component.html',
  styleUrls: ['./listagem-atendimentos.component.css']
})
export class ListagemAtendimentosComponent implements OnInit {
  atendimentos: Atendimento[] = [];

  constructor(private atendimentoService: AtendimentoService) {}

  ngOnInit(): void {
    this.listarAtendimentos();
  }

  listarAtendimentos() {
    this.atendimentoService.listarAtendimentos()
      .subscribe(
        (data: Atendimento[]) => {
          this.atendimentos = data;
        },
        (error: any) => { // Definindo explicitamente o tipo de error como any
          console.error('Erro ao listar atendimentos:', error);
          // Tratar erro (exibir mensagem de erro, etc.)
        }
      );
  }
}
