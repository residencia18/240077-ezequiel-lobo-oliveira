import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'; // Importe FormBuilder e FormGroup

import { AtendimentoService } from '../Services/atendimento.service';
import { Atendimento } from '../Models/atendimento.model';

@Component({
  selector: 'app-cadastro-atendimento',
  templateUrl: './cadastro-atendimento.component.html',
  styleUrls: ['./cadastro-atendimento.component.css']
})
export class CadastroAtendimentoComponent {
  cadastroForm: FormGroup; // Declare uma variável para armazenar o FormGroup

  constructor(private formBuilder: FormBuilder, private atendimentoService: AtendimentoService) {
    this.cadastroForm = this.formBuilder.group({
      nomeCliente: ['', Validators.required], // Defina os campos do formulário e suas validações
      nomePet: ['', Validators.required],
      dataAtendimento: ['', Validators.required],
      observacoes: ['']
    });
  }

  cadastrarAtendimento() {
    if (this.cadastroForm.valid) { // Verifique se o formulário é válido antes de prosseguir
      const novoAtendimento: Atendimento = this.cadastroForm.value; // Obtenha os valores do formulário
      
      this.atendimentoService.cadastrarAtendimento(novoAtendimento)
        .subscribe(() => {
          console.log('Atendimento cadastrado com sucesso!');
          this.cadastroForm.reset(); // Limpe o formulário após o cadastro bem-sucedido
        }, (error: any) => {
          console.error('Erro ao cadastrar atendimento:', error);
          // Tratar erro (exibir mensagem de erro, etc.)
        });
    } else {
      console.error('Formulário inválido. Por favor, verifique os campos.');
      // Exibir mensagem de erro ou tratar de outra forma
    }
  }
}
