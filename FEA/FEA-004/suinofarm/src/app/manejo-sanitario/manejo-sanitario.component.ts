import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SuinoService } from '../services/suino.service';
import { Suino } from '../models/suino.model';

@Component({
  selector: 'app-manejo-sanitario',
  templateUrl: './manejo-sanitario.component.html',
  styleUrls: ['./manejo-sanitario.component.css']
})
export class ManejoSanitarioComponent implements OnInit {
  manejoForm: FormGroup;
  suinos: Suino[] = [];

  constructor(private formBuilder: FormBuilder, private suinoService: SuinoService) {
    this.manejoForm = this.formBuilder.group({
      data: ['', Validators.required],
      descricao: ['', Validators.required],
      brincos: ['', Validators.required],
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
      
    } else {
      this.manejoForm.markAllAsTouched();
    }
  }
}
