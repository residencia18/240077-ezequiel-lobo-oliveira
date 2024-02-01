// src/app/barra-de-busca/barra-de-busca.component.ts
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-barra-de-busca',
  templateUrl: './barra-de-busca.component.html',
  styleUrls: ['./barra-de-busca.component.css'],
})
export class BarraDeBuscaComponent {
  @Output() buscarTermo = new EventEmitter<string>();
  termoBusca: string = '';

  buscar(): void {
    this.buscarTermo.emit(this.termoBusca);
  }
}
