// src/app/propriedades/propriedades.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrls: ['./propriedades.component.css']
})
export class PropriedadesComponent {
  @Input() propriedades: string[] = [];

  constructor(private communicationService: CommunicationService) {}

  ngOnInit(): void {
    this.communicationService.veiculoSelecionado$.subscribe((veiculo: any) => { // Corrigido para veiculoSelecionado$
      
    });
  }

  selecionarPropriedade(propriedade: string): void {
    
  }
}
