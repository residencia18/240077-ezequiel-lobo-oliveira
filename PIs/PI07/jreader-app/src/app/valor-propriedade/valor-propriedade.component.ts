// src/app/valor-propriedade/valor-propriedade.component.ts
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-valor-propriedade',
  templateUrl: './valor-propriedade.component.html',
  styleUrls: ['./valor-propriedade.component.css']
})
export class ValorPropriedadeComponent {
  @Input() valorPropriedade: any;
}
