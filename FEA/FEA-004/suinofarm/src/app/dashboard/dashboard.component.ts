import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service'; // Importe o serviço de autenticação

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  currentComponent: string = ''; // Variável para controlar o componente atualmente exibido
  currentYear: number = new Date().getFullYear();
  sidebarHidden: boolean = false; // Estado inicial da barra lateral

  constructor(private authService: AuthService) {} // Injete o serviço de autenticação

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

  showManejoSanitario() {
    this.currentComponent = 'manejo-sanitario';
  }

  // Método para realizar o logout
  logout() {
    this.authService.logout();
  }
}
