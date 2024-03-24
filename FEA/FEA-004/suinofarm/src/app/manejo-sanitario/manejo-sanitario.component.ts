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
  suinosSelecionados: string[] = [];

  constructor(private formBuilder: FormBuilder, private suinoService: SuinoService) {
    this.manejoForm = this.formBuilder.group({
      data: ['', Validators.required],
      descricao: ['', Validators.required],
      suinosSelecionados: [[], Validators.required],
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

  adicionarSuino(brinco: string): void {
    if (!this.suinosSelecionados.includes(brinco)) {
      this.suinosSelecionados.push(brinco);
      this.manejoForm.get('suinosSelecionados')?.setValue(this.suinosSelecionados);
    } else {
      console.error('Suíno selecionado já foi adicionado.');
    }
  }

  cadastrarManejo(): void {
    if (this.manejoForm.valid) {
      const { data, descricao, suinosSelecionados, atividades } = this.manejoForm.value;

      // Dividir a string de atividades por vírgulas para criar um array
      const atividadesArray = atividades.split(',').map((atividade: string) => atividade.trim());

      const novoManejo: ManejoSanitario = {
        data: data,
        descricao: descricao,
        brincos: suinosSelecionados, // Utilizar os brincos selecionados diretamente
        atividades: atividadesArray
      };

      this.suinoService.cadastrarManejo(novoManejo).then(() => {
        console.log('Manejo sanitário cadastrado com sucesso.');
        this.manejoForm.reset();
        this.suinosSelecionados = []; // Limpar a lista de suínos selecionados após o cadastro
      }).catch((error: any) => {
        console.error('Erro ao cadastrar manejo sanitário:', error);
      });
    } else {
      this.manejoForm.markAllAsTouched();
    }
  }
}
