// Nome do arquivo: edicao-atendimento.component.ts
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

  submitForm(): void {
    this.atendimentoService.atualizarAtendimento(this.atendimento)
      .subscribe(() => {
        // Redirecionar para a página de detalhes após a atualização
        this.redirecionarParaDetalhes();
      });
  }

  redirecionarParaDetalhes(): void {
    const id = this.atendimento.id;
    // Redirecionar para a página de detalhes do atendimento
    // Por exemplo: this.router.navigate(['/detalhamento', id]);
  }
}
