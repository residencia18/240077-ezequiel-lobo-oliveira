import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) {}

  login(email: string, password: string): Promise<void> {
    return this.afAuth.signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Login bem-sucedido!');
      })
      .catch(error => {
        console.error('Erro no login:', error);
        throw error; 
      });
  }

  signUp(email: string, password: string): Promise<void> {
    return this.afAuth.createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('Cadastro bem-sucedido!');
      })
      .catch(error => {
        console.error('Erro no cadastro:', error);
        throw error; 
      });
  }
}
