// src/app/services/communication.service.ts
import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private categoriaSelecionadaSource = new Subject<string>();
  categoriaSelecionada$ = this.categoriaSelecionadaSource.asObservable();

  veiculoSelecionado$ = new Subject<any>(); 

  constructor() {}

  enviarCategoriaSelecionada(categoria: string): void {
    this.categoriaSelecionadaSource.next(categoria);
  }

  enviarVeiculoSelecionado(veiculo: any): void {
    this.veiculoSelecionado$.next(veiculo); 
  }

  getVeiculos(): Observable<any> { 
    return new Observable<any>(); 
  }
}
