import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuinoService } from '../services/suino.service';
import { Peso } from '../models/peso.model';

@Component({
  selector: 'app-edicao-peso',
  templateUrl: './edicao-peso.component.html',
  styleUrls: ['./edicao-peso.component.css']
})
export class EdicaoPesoComponent implements OnInit {
  @Input() pesoId: string; // Identificador do peso a ser editado
  edicaoPesoForm: FormGroup;
  peso: Peso; // Objeto para armazenar os dados do peso a ser editado

  constructor(private formBuilder: FormBuilder, private suinoService: SuinoService) {
    this.edicaoPesoForm = this.formBuilder.group({
      dataPesagem: ['', Validators.required],
      peso: ['', [Validators.required, Validators.pattern(/^\d*\.?\d*$/)]]
    });
  }

  ngOnInit(): void {
    this.carregarPeso();
  }

  carregarPeso(): void {
    this.suinoService.getPeso(this.pesoId).subscribe(peso => {
      this.peso = peso;
      this.edicaoPesoForm.patchValue({
        dataPesagem: peso.dataPesagem,
        peso: peso.peso
      });
    });
  }

  salvarEdicao(): void {
    if (this.edicaoPesoForm.valid) {
      const { dataPesagem, peso } = this.edicaoPesoForm.value;
      this.suinoService.atualizarPeso(this.pesoId, { dataPesagem, peso }).subscribe(() => {
        console.log('Peso atualizado com sucesso.');
      });
    } else {
      this.edicaoPesoForm.markAllAsTouched();
    }
  }
}
