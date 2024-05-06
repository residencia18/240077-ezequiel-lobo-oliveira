import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { uppercaseValidator } from '../validators/uppercase-validator'; // Importe o validador personalizado

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  email: string = '';
  password: string = '';
  isLoginMode = true;
  authForm!: FormGroup; // Adicione o operador de atribuição de não nulo para evitar o erro de inicialização nula

  constructor(private authService: AuthService, private fb: FormBuilder) {
    // Inicialize authForm no construtor
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), uppercaseValidator()]] // Adicione o validador personalizado
    });
  }

  submitForm(): void {
    const email = this.authForm.value.email;
    const password = this.authForm.value.password;

    if (this.isLoginMode) {
      this.authService.login(email, password);
    } else {
      this.authService.signUp(email, password);
    }
  }

  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
    this.authForm.reset(); // Limpar o formulário ao alternar entre os modos
  }
}
