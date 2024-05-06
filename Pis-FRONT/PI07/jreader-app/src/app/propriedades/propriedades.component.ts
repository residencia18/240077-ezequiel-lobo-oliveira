// src/app/propriedades/propriedades.component.ts
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-propriedades',
  templateUrl: './propriedades.component.html',
  styleUrls: ['./propriedades.component.css']
})
export class PropriedadesComponent {
  @Input() propriedades: string[] = [];
  @Output() propriedadeSelecionada = new EventEmitter<string>();

  selecionarPropriedade(propriedade: string): void {
    this.propriedadeSelecionada.emit(propriedade);
  }
}
