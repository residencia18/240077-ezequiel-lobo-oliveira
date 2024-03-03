// Nome do arquivo: detalhamento-atendimento.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Atendimento } from '../Models/atendimento.model';
import { AtendimentoService } from '../Services/atendimento.service';

@Component({
  selector: 'app-detalhamento-atendimento',
  templateUrl: './detalhamento-atendimento.component.html',
  styleUrls: ['./detalhamento-atendimento.component.css']
})
export class DetalhamentoAtendimentoComponent implements OnInit {
  atendimento: Atendimento = {
    id: 0,
    petName: '',
    clienteName: '',
    data: '',
    observacoes: ''
  };

  constructor(
    private route: ActivatedRoute,
    private atendimentoService: AtendimentoService
  ) {}

  ngOnInit(): void {
    this.obterDetalhesAtendimento();
  }
  obterDetalhesAtendimento(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    if (idParam) {
      const id = +idParam;
      this.atendimentoService.buscarAtendimentoPorId(id)
        .subscribe(atendimento => this.atendimento = atendimento);
    } else {
      console.error('Parâmetro ID não encontrado.');
    }
  }
}
