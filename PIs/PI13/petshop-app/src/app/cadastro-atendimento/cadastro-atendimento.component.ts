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
    observacoes: ''
  };

  constructor(private atendimentoService: AtendimentoService) {}

  submitForm() {
    this.atendimentoService.cadastrarAtendimento(this.atendimento).subscribe(() => {
      // Limpar formulário ou redirecionar para outra página após o cadastro
      this.atendimento = {
        petName: '',
        clienteName: '',
        data: '',
        observacoes: ''
      };
    });
  }
}
