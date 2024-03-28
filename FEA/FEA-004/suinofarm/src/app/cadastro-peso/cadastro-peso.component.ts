import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuinoService } from '../services/suino.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-cadastro-peso',
  templateUrl: './cadastro-peso.component.html',
  styleUrls: ['./cadastro-peso.component.css']
})
export class CadastroPesoComponent implements OnInit {
  cadastroPesoForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private suinoService: SuinoService) {
    this.cadastroPesoForm = this.formBuilder.group({
      numeroBrinco: ['', Validators.required],
      dataPesagem: ['', Validators.required],
      peso: ['', [Validators.required, Validators.pattern(/^\d*\.?\d*$/)]]
    });
  }

  ngOnInit(): void {
  }

  cadastrarPeso(): void {
    if (this.cadastroPesoForm.valid) {
      const { numeroBrinco, dataPesagem, peso } = this.cadastroPesoForm.value;
      from(this.suinoService.cadastrarPeso(numeroBrinco, dataPesagem, peso)).subscribe(
        () => {
          console.log('Peso cadastrado com sucesso.');
          this.cadastroPesoForm.reset();
        },
        (error: any) => { // Definindo explicitamente o tipo do parâmetro error como any
          console.error('Erro ao cadastrar peso:', error);
        }
      );
    } else {
      this.cadastroPesoForm.markAllAsTouched();
    }
  }
}