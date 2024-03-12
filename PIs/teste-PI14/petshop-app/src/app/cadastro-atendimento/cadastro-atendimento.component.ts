import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { Atendimento } from '../Models/atendimento.model';
import { AtendimentoService } from '../Services/atendimento.service';
import { AuthService } from '../auth/auth.service'; // Importe o AuthService

@Component({
  selector: 'app-cadastro-atendimento',
  templateUrl: './cadastro-atendimento.component.html',
  styleUrls: ['./cadastro-atendimento.component.css']
})
export class CadastroAtendimentoComponent {
  atendimentoForm: FormGroup;
  atendimento: Atendimento = {
    petName: '',
    clienteName: '',
    data: '',
    observacoes: '',
    clienteCpf: ''
  };

  constructor(
    private formBuilder: FormBuilder,
    private atendimentoService: AtendimentoService,
    private authService: AuthService // Injete o AuthService
  ) {
    this.atendimentoForm = this.formBuilder.group({
      petName: ['', Validators.required],
      clienteName: ['', Validators.required],
      clienteCpf: ['', Validators.required],
      data: ['', Validators.required],
      observacoes: ['']
    });
  }

  get petName() { return this.atendimentoForm.get('petName'); }
  get clienteName() { return this.atendimentoForm.get('clienteName'); }
  get clienteCpf() { return this.atendimentoForm.get('clienteCpf'); }
  get data() { return this.atendimentoForm.get('data'); }

  submitForm() {
    if (!this.atendimentoForm) {
      console.error('O formulário não está definido.');
      return;
    }

    if (this.atendimentoForm.invalid) {
      console.error('O formulário contém erros. Por favor, corrija-os antes de enviar.');
      return;
    }

    this.atendimento = this.atendimentoForm.value;

    this.atendimentoService.cadastrarAtendimento(this.atendimento)
      .then(() => {
        this.atendimentoForm.reset();
      })
      .catch(error => {
        console.error('Ocorreu um erro durante o cadastro:', error);
      });
  }

  logout() {
    this.authService.logout(); // Chame a função de logout do AuthService
  }
}
