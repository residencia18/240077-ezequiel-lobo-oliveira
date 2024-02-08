import { Component } from '@angular/core';
import { CommunicationService } from '../services/communication.service';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  categorias = ['Carros', 'Motos', 'Caminhões'];

  constructor(private communicationService: CommunicationService) { }

  selecionarCategoria(categoria: string): void {
    this.communicationService.enviarCategoriaSelecionada(categoria);
  }
}
