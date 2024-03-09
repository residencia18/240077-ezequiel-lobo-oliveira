import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { User } from '../Models/user.model';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  email: string='';
  password: string = ''; 
  isLoginMode = true;

  constructor(private authService: AuthService) {}

  submitForm(): void {
    if (this.isLoginMode) {
      // Chamar método de login do serviço
      this.authService.login(this.email, this.password);
    } else {
      // Chamar método de cadastro do serviço
      this.authService.signUp(this.email, this.password);
    }
  }

  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
  }
}
