import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  currentComponent: string = ''; // Variável para controlar o componente atualmente exibido

  // Método para exibir o componente de cadastro de suínos
  showCadastro() {
    this.currentComponent = 'cadastro';
  }

  // Método para exibir o componente de listagem de suínos
  showListagem() {
    this.currentComponent = 'listagem';
  }

  // Método para exibir o componente de controle de peso
  showControlePeso() {
    this.currentComponent = 'controlePeso';
  }

  // Método para exibir o componente de edição de peso
  showEdicaoPeso() {
    this.currentComponent = 'edicaoPeso';
  }
}
