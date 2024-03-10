import { Component, OnInit } from '@angular/core';
import { BackendService } from '../services/backend.service';

@Component({
  selector: 'app-listagem-suinos',
  templateUrl: './listagem-suinos.component.html',
  styleUrls: ['./listagem-suinos.component.css']
})
export class ListagemSuinosComponent implements OnInit {
  suinos: any[];

  constructor(private backendService: BackendService) { }

  ngOnInit(): void {
    this.backendService.getSuinos().subscribe(response => {
      this.suinos = response;
    });
  }

  editarSuino(suino: any) {
    // Implementar lógica de edição
  }

  deletarSuino(suino: any) {
    // Implementar lógica de exclusão
  }
}
