// Nome do arquivo: atendimento.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Atendimento } from '../Models/atendimento.model';

@Injectable({
  providedIn: 'root'
})
export class AtendimentoService {
  private apiUrl = 'http://exemplo.com/api/atendimentos';

  constructor(private http: HttpClient) {}

  buscarAtendimentoPorId(id: number): Observable<Atendimento> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<Atendimento>(url);
  }

  atualizarAtendimento(atendimento: Atendimento): Observable<any> {
    const url = `${this.apiUrl}/${atendimento.id}`;
    return this.http.put(url, atendimento);
  }

  cadastrarAtendimento(atendimento: Atendimento): Observable<Atendimento> {
    const url = `${this.apiUrl}`;
    return this.http.post<Atendimento>(url, atendimento);
  }

 
  listarAtendimentos(): Observable<Atendimento[]> {
    return this.http.get<Atendimento[]>(this.apiUrl);
  }
}
