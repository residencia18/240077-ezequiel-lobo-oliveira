import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Suino } from '../models/suino.model';
import { SuinoService } from '../services/suino.service';

@Component({
  selector: 'app-suino-cadastro',
  templateUrl: './suino-cadastro.component.html',
  styleUrls: ['./suino-cadastro.component.css']
})
export class SuinoCadastroComponent implements OnInit {
  suinoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private suinoService: SuinoService) {
    this.suinoForm = this.formBuilder.group({
      brinco: ['', Validators.required],
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
      this.suinoService.addSuino(novoSuino)
        .then(() => {
          console.log('Novo suíno cadastrado:', novoSuino);
          // Limpar o formulário após o cadastro
          this.suinoForm.reset();
        })
        .catch(error => {
          console.error('Erro ao cadastrar suíno:', error);
        });
    } else {
      // Marcar todos os campos como tocados para exibir os erros de validação
      this.suinoForm.markAllAsTouched();
    }
  }
}
