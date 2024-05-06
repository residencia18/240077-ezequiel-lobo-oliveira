import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuinoService } from '../services/suino.service';
import { HistoricoPeso } from '../models/peso.model';

@Component({
  selector: 'app-edicao-peso',
  templateUrl: './edicao-peso.component.html',
  styleUrls: ['./edicao-peso.component.css']
})
export class EdicaoPesoComponent implements OnInit {
  @Input() pesoId: string = '';
  edicaoPesoForm: FormGroup;
  peso: HistoricoPeso = {} as HistoricoPeso;

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
      this.peso = peso[0]; // Obter o primeiro elemento do array
      this.edicaoPesoForm.patchValue({
        dataPesagem: this.peso.dataPesagem,
        peso: this.peso.peso
      });
    });
  }
  

 salvarEdicao(): void {
  if (this.edicaoPesoForm.valid) {
    const { dataPesagem, peso } = this.edicaoPesoForm.value;
    this.suinoService.atualizarPeso(this.pesoId, 'ID_DO_HISTORICO', dataPesagem, peso).then(() => {
      console.log('Peso atualizado com sucesso.');
    }).catch(error => {
      console.error('Erro ao atualizar peso:', error);
    });
  } else {
    this.edicaoPesoForm.markAllAsTouched();
  }
}

}
