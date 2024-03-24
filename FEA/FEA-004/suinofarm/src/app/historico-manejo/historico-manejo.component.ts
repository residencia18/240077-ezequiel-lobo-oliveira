import { Component, OnInit } from '@angular/core';
import { ManejoSanitario } from '../models/manejo-sanitario.model';
import { ManejoSanitarioService } from '../services/manejo-sanitario.service';

@Component({
  selector: 'app-historico-manejo',
  templateUrl: './historico-manejo.component.html',
  styleUrls: ['./historico-manejo.component.css']
})
export class HistoricoManejoComponent implements OnInit {
  historicoManejos: ManejoSanitario[] = [];

  constructor(private manejoService: ManejoSanitarioService) { }

  ngOnInit(): void {
    this.carregarHistoricoManejos();
  }

  carregarHistoricoManejos(): void {
  this.manejoService.getHistoricoManejos().subscribe((manejos: ManejoSanitario[]) => {
    this.historicoManejos = manejos.map(manejo => {
      // Verifica se a propriedade 'brincos' é um array
      if (Array.isArray(manejo.brincos)) {
        // Se for um array, retorna o manejo sem modificação
        return manejo;
      } else {
        // Se não for um array, trata como um array vazio
        return { ...manejo, brincos: [] };
      }
    });
  });
}

  
  
}
