import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Suino } from '../models/suino.model';

@Component({
  selector: 'app-suino-cadastro',
  templateUrl: './suino-cadastro.component.html',
  styleUrls: ['./suino-cadastro.component.css']
})
export class SuinoCadastroComponent implements OnInit {
  suinoForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.suinoForm = this.formBuilder.group({
      brincoAnimal: ['', Validators.required],
      brincoPai: ['', Validators.required],
      brincoMae: ['', Validators.required],
      dataNascimento: ['', Validators.required],
      dataSaida: ['', Validators.required],
      status: ['', Validators.required],
      sexo: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  cadastrarSuino(): void {
    if (this.suinoForm.valid) {
      const novoSuino: Suino = this.suinoForm.value;
      // Aqui você pode enviar o novo suíno para o serviço para ser salvo no banco de dados
      console.log('Novo suíno cadastrado:', novoSuino);
      // Limpar o formulário após o cadastro
      this.suinoForm.reset();
    } else {
      // Marcar todos os campos como tocados para exibir os erros de validação
      this.suinoForm.markAllAsTouched();
    }
  }
}
