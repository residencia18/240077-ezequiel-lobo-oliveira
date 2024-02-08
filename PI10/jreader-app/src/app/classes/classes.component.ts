import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent {
  @Output() categoriaSelecionada = new EventEmitter<string>();

  categorias = ['Aviões', 'Carros', 'Barcos'];
  categoriaSelecionadaAtual: string | null = null;

  constructor() {}

  selecionarCategoria(categoria: string): void {
    this.categoriaSelecionadaAtual = categoria;
    this.categoriaSelecionada.emit(categoria);
  }
}
