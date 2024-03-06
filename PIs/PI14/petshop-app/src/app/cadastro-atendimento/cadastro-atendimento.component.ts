import { Component } from '@angular/core';
import { Atendimento } from '../Models/atendimento.model';
import { AtendimentoService } from '../Services/atendimento.service';

@Component({
  selector: 'app-cadastro-atendimento',
  templateUrl: './cadastro-atendimento.component.html',
  styleUrls: ['./cadastro-atendimento.component.css']
})
export class CadastroAtendimentoComponent {
  atendimento: Atendimento = {
    petName: '',
    clienteName: '',
    data: '',
    observacoes: '',
    clienteCpf: '' // Inicializando com string vazia
  };

  constructor(private atendimentoService: AtendimentoService) {}

  submitForm() {
    this.atendimentoService.cadastrarAtendimento(this.atendimento)
      .then(() => {
        this.atendimento = { // Limpando o formulário após o cadastro
          petName: '',
          clienteName: '',
          data: '',
          observacoes: '',
          clienteCpf: ''
        };
      })
      .catch(error => {
        console.error('Ocorreu um erro durante o cadastro:', error);
      });
  }
}
