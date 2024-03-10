import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> {
    return this.authService.user$.pipe(
      take(1), // Para se inscrever apenas uma vez e depois cancelar a inscrição automaticamente
      map(user => {
        if (user) {
          return true; // Se o usuário estiver autenticado, permite o acesso à rota
        } else {
          this.router.navigate(['/login']); // Se o usuário não estiver autenticado, redireciona para a página de login
          return false;
        }
      })
    );
  }
}
