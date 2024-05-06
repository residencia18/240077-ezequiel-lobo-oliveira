import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Atendimento } from '../Models/atendimento.model';
import { AtendimentoService } from '../Services/atendimento.service';

@Component({
  selector: 'app-edicao-atendimento',
  templateUrl: './edicao-atendimento.component.html',
  styleUrls: ['./edicao-atendimento.component.css']
})
export class EdicaoAtendimentoComponent implements OnInit {
  atendimento: Atendimento | null = null;
  atualizacaoConcluida: boolean = false;
  mensagem: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
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

  submitForm(): void {
    if (this.atendimento) {
      this.atendimentoService.atualizarAtendimento(this.atendimento)
        .then(() => {
          this.atualizacaoConcluida = true;
          this.mensagem = 'Atendimento atualizado!';
          this.redirecionarParaDetalhes();
          // Limpar informações do formulário
          this.atendimento = null;
        })
        .catch(error => {
          console.error('Erro ao atualizar o atendimento:', error);
          this.mensagem = 'Erro ao atualizar o atendimento';
        });
    } else {
      console.error('Atendimento não encontrado.');
      this.mensagem = 'Atendimento não encontrado.';
    }
  }

  redirecionarParaDetalhes(): void {
    if (this.atendimento && this.atendimento.clienteCpf) {
      const clienteCpf = this.atendimento.clienteCpf;
      this.router.navigate(['/listagem', ]);
    } else {
      console.error('CPF do cliente não encontrado.');
    }
  }
  
}
