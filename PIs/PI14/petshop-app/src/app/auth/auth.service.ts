import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {}

  login(email: string, password: string): void {
    // Lógica para fazer login
    console.log('Login com:', email, password);
  }

  signUp(email: string, password: string): void {
    // Lógica para cadastrar um novo usuário
    console.log('Cadastro com:', email, password);
  }
}
