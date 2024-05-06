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
  atendimento: Atendimento | null = null; // Alterado para Atendimento | null

  constructor(
    private route: ActivatedRoute,
    private atendimentoService: AtendimentoService
  ) {}

  ngOnInit(): void {
    this.obterDetalhesAtendimento();
  }

  obterDetalhesAtendimento(): void {
    const clienteCpfParam = this.route.snapshot.paramMap.get('clienteCpf');
    if (clienteCpfParam) {
      const clienteCpf = clienteCpfParam;
      this.atendimentoService.buscarAtendimentoPorCpf(clienteCpf)
        .subscribe(atendimento => {
          if (atendimento) {
            this.atendimento = atendimento;
          } else {
            console.error('Atendimento não encontrado.');
          }
        });
    } else {
      console.error('Parâmetro CPF não encontrado.');
    }
  }
}
