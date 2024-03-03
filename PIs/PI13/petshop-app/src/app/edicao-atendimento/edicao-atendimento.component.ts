import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AtendimentoService } from '../Services/atendimento.service';
import { Atendimento } from '../Models/atendimento.model';

@Component({
  selector: 'app-edicao-atendimento',
  templateUrl: './edicao-atendimento.component.html',
  styleUrls: ['./edicao-atendimento.component.css']
})
export class EdicaoAtendimentoComponent implements OnInit {
  atendimento: Atendimento = {
    id: 0,
    nomeCliente: '',
    nomePet: '',
    dataAtendimento: new Date(),
    observacoes: ''
  };

  constructor(private route: ActivatedRoute, private router: Router, private atendimentoService: AtendimentoService) {}

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.buscarAtendimento(id);
  }

  buscarAtendimento(id: number) {
    this.atendimentoService.detalharAtendimento(id)
      .subscribe((data: Atendimento) => {
        this.atendimento = data;
      }, (error: any) => {
        console.error('Erro ao buscar atendimento:', error);
        // Tratar erro (exibir mensagem de erro, etc.)
      });
  }

  atualizarAtendimento() {
    this.atendimentoService.editarAtendimento(this.atendimento.id, this.atendimento)
      .subscribe(() => {
        console.log('Atendimento atualizado com sucesso');
        // Redirecionar para a página de detalhes do atendimento atualizado
        this.router.navigate(['/detalhe-atendimento', this.atendimento.id]);
      }, (error: any) => {
        console.error('Erro ao atualizar atendimento:', error);
        // Tratar erro (exibir mensagem de erro, etc.)
      });
  }
}
