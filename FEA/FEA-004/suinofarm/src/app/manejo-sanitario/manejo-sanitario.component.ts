import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuinoService } from '../services/suino.service';
import { ManejoSanitario } from '../models/manejo-sanitario.model';
import { Suino } from '../models/suino.model';

@Component({
  selector: 'app-manejo-sanitario',
  templateUrl: './manejo-sanitario.component.html',
  styleUrls: ['./manejo-sanitario.component.css']
})
export class CadastroManejoComponent implements OnInit {
  manejoForm: FormGroup;
  suinos: Suino[] = [];

  constructor(private formBuilder: FormBuilder, private suinoService: SuinoService) {
    this.manejoForm = this.formBuilder.group({
      data: ['', Validators.required],
      descricao: ['', Validators.required],
      brincos: [[], Validators.required],
      atividades: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.carregarSuinos();
  }

  carregarSuinos(): void {
    this.suinoService.getSuinos().subscribe(suinos => {
      this.suinos = suinos;
    });
  }

  cadastrarManejo(): void {
    if (this.manejoForm.valid) {
      const { data, descricao, brincos, atividades } = this.manejoForm.value;
      const novoManejo: ManejoSanitario = {
        data: data,
        descricao: descricao,
        brincos: brincos,
        atividades: atividades
      };

      this.suinoService.cadastrarManejo(novoManejo).then(() => {
        console.log('Manejo sanitário cadastrado com sucesso.');
        this.manejoForm.reset();
      }).catch((error: any) => {
        console.error('Erro ao cadastrar manejo sanitário:', error);
      });
    } else {
      this.manejoForm.markAllAsTouched();
    }
  }
}
