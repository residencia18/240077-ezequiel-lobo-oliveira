import { Component, Input, OnInit } from '@angular/core';
import { Suino } from '../models/suino.model';
import { SuinoService } from '../services/suino.service';

@Component({
  selector: 'app-suino-edicao',
  templateUrl: './suino-edicao.component.html',
  styleUrls: ['./suino-edicao.component.css']
})
export class SuinoEdicaoComponent implements OnInit {
  @Input() suino: Suino;

  constructor(private suinoService: SuinoService) {
    this.suino = {} as Suino; 
  }
  

  ngOnInit(): void {
  }

  salvarEdicao(): void {
    this.suinoService.updateSuino(this.suino)
      .then(() => {
        console.log('Suíno editado com sucesso.');
        // Lógica adicional após a edição do suíno, como fechar o modal ou navegar para outra página
      })
      .catch(error => console.error('Erro ao editar suíno:', error));
  }
}
