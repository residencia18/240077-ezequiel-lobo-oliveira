import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user$: Observable<any>; // Observable para acompanhar o estado de autenticação do usuário

  constructor(private afAuth: AngularFireAuth, private router: Router) {
    this.user$ = afAuth.authState; // Inicializar o Observable com o estado de autenticação atual
  }

  // Método para realizar o login
  login(email: string, password: string): void {
    this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Login bem-sucedido!');
        this.router.navigate(['/dashboard']); // Redirecionar para a página após o login
      })
      .catch(error => {
        console.error('Erro no login:', error);
          alert('Email ou senha incorretos. Por favor, tente novamente.');
        
      });
  }

  // Método para realizar o cadastro
  signUp(email: string, password: string): void {
    this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Cadastro bem-sucedido!');
        this.router.navigate(['/deshbord']); // Redirecionar para a página após o cadastro
      })
      .catch(error => {
        console.error('Erro no cadastro:', error);
        // Adicionar lógica para tratar o erro de cadastro, se necessário
      });
  }

  // Método para realizar o logout
  logout(): void {
    this.afAuth.signOut()
      .then(() => {
        console.log('Logout bem-sucedido!');
        this.router.navigate(['/login']); // Redirecionar para a página de login após logout
      })
      .catch(error => {
        console.error('Erro no logout:', error);
        // Adicionar lógica para tratar o erro de logout, se necessário
      });
  }
}
