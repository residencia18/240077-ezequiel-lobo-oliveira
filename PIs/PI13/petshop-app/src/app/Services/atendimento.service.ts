import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Atendimento } from '../Models/atendimento.model';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {
  private apiUrl = 'http://localhost:3000/atendimentos'; // URL do backend (substitua conforme necessário)

  constructor(private http: HttpClient) { }

  cadastrarAtendimento(atendimento: Atendimento): Observable<Atendimento> {
    return this.http.post<Atendimento>(this.apiUrl, atendimento)
      .pipe(
        catchError(this.handleError)
      );
  }

  listarAtendimentos(): Observable<Atendimento[]> {
    return this.http.get<Atendimento[]>(this.apiUrl)
      .pipe(
        catchError(this.handleError)
      );
  }

  editarAtendimento(id: number, atendimento: Atendimento): Observable<Atendimento> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Atendimento>(url, atendimento)
      .pipe(
        catchError(this.handleError)
      );
  }

  detalharAtendimento(id: number): Observable<Atendimento> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Atendimento>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  buscarAtendimentoPorId(id: number): Observable<Atendimento> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Atendimento>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any) {
    console.error('Erro:', error);
    return throwError('Erro ao processar requisição. Por favor, tente novamente mais tarde.'); // Mensagem de erro genérica
  }
}
