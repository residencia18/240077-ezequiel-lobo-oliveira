// detalhamento-atendimento.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AtendimentoService } from '../Services/atendimento.service';
import { Atendimento } from '../Models/atendimento.model';

@Component({
  selector: 'app-detalhe-atendimento',
  templateUrl: './detalhamento-atendimento.component.html',
  styleUrls: ['./detalhamento-atendimento.component.css']
})
export class DetalheAtendimentoComponent implements OnInit {
  atendimento: Atendimento = {
    id: 0,
    nomeCliente: '',
    nomePet: '',
    dataAtendimento: new Date(),
    observacoes: ''
  };

  constructor(private route: ActivatedRoute, private atendimentoService: AtendimentoService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.buscarAtendimento(id);
  }

  buscarAtendimento(id: number) {
    this.atendimentoService.buscarAtendimentoPorId(id)
      .subscribe((data: Atendimento) => {
        this.atendimento = data;
      }, (error: any) => {
        console.error('Erro ao buscar atendimento:', error);
        // Tratar erro (exibir mensagem de erro, etc.)
      });
  }
}
