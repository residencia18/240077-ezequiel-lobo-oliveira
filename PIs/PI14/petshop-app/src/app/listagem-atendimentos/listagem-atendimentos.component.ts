import { Component, OnInit } from '@angular/core';
import { Atendimento } from '../Models/atendimento.model';
import { AtendimentoService } from '../Services/atendimento.service';

@Component({
  selector: 'app-listagem-atendimentos',
  templateUrl: './listagem-atendimentos.component.html',
  styleUrls: ['./listagem-atendimentos.component.css']
})
export class ListagemAtendimentosComponent implements OnInit {
  atendimentos: Atendimento[] = [];

  constructor(private atendimentoService: AtendimentoService) {}

  ngOnInit(): void {
    this.carregarAtendimentos();
  }

  carregarAtendimentos(): void {
    this.atendimentoService.listarAtendimentos()
      .subscribe(atendimentos => this.atendimentos = atendimentos);
  }
}
