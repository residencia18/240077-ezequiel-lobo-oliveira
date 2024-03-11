import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  currentComponent: string = ''; // Variável para controlar o componente atualmente exibido
  currentYear: number = new Date().getFullYear();
  sidebarHidden: boolean = false; // Estado inicial da barra lateral
   // Obtém o ano atual // Propriedade para armazenar o ano atual

  // Métodos para exibir os diferentes componentes
  showCadastro() {
    this.currentComponent = 'cadastro';
  }

  showListagem() {
    this.currentComponent = 'listagem';
  }

  showControlePeso() {
    this.currentComponent = 'controlePeso';
  }

  showEdicaoPeso() {
    this.currentComponent = 'edicaoPeso';
  }

  showCadastroPeso() {
    this.currentComponent = 'cadastroPeso';
  }


   
   toggleSidebar() {
    this.sidebarHidden = !this.sidebarHidden;
  }
}
