import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Atendimento } from '../Models/atendimento.model';
import { AtendimentoService } from '../Services/atendimento.service';
import { AuthService } from '../auth/auth.service'; // Importe AuthService aqui

@Component({
  selector: 'app-listagem-atendimentos',
  templateUrl: './listagem-atendimentos.component.html',
  styleUrls: ['./listagem-atendimentos.component.css']
})
export class ListagemAtendimentosComponent implements OnInit {
  atendimentos: Atendimento[] = [];

  constructor(
    private atendimentoService: AtendimentoService, 
    private router: Router,
    private authService: AuthService // Adicione AuthService aqui
  ) {} 

  ngOnInit(): void {
    this.carregarAtendimentos();
  }

  carregarAtendimentos(): void {
    this.atendimentoService.listarAtendimentos()
      .subscribe(atendimentos => this.atendimentos = atendimentos);
  }

  deleteAtendimento(clienteCpf: string): void {
    if (confirm('Tem certeza que deseja excluir este atendimento?')) {
      this.atendimentoService.deletarAtendimentoPorCpf(clienteCpf)
        .then(() => {
          console.log('Atendimento excluído com sucesso!');
          this.carregarAtendimentos();
        })
        .catch(error => {
          console.error('Erro ao excluir atendimento:', error);
        });
    }
  }

  editarAtendimento(clienteCpf: string): void {
    this.router.navigate(['/edicao', clienteCpf]);
  }

  logout(): void {
    this.authService.logout(); 
  }
}
