import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Atendimento } from '../Models/atendimento.model';
import { AtendimentoService } from '../Services/atendimento.service';

@Component({
  selector: 'app-edicao-atendimento',
  templateUrl: './edicao-atendimento.component.html',
  styleUrls: ['./edicao-atendimento.component.css']
})
export class EdicaoAtendimentoComponent implements OnInit {
  atendimento: Atendimento | null = null; // Alterado para Atendimento | null

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
      const id = idParam;
      this.atendimentoService.buscarAtendimentoPorId(id)
        .subscribe(atendimento => {
          if (atendimento) {
            this.atendimento = atendimento;
          } else {
            console.error('Atendimento não encontrado.');
          }
        });
    } else {
      console.error('Parâmetro ID não encontrado.');
    }
  }

  submitForm(): void {
    if (this.atendimento) {
      this.atendimentoService.atualizarAtendimento(this.atendimento)
        .then(() => {
          this.redirecionarParaDetalhes();
        })
        .catch(error => {
          console.error('Erro ao atualizar o atendimento:', error);
        });
    } else {
      console.error('Atendimento não encontrado.');
    }
  }

  redirecionarParaDetalhes(): void {
    // Lógica para redirecionar para a página de detalhes
  }
}
