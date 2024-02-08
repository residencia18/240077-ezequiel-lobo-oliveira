import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-objetos',
  templateUrl: './objetos.component.html',
  styleUrls: ['./objetos.component.css']
})
export class ObjetosComponent {
  @Input() categoriaSelecionada: string | null = null;
  veiculos: any[] = []; // Certifique-se de preencher este array com os veículos correspondentes à categoria selecionada

  selecionarVeiculo(veiculo: any): void {
    // Lógica para selecionar um veículo
  }
}
