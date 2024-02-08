import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private categoriaSelecionadaSource = new Subject<string>();
  categoriaSelecionada$ = this.categoriaSelecionadaSource.asObservable();

  enviarCategoriaSelecionada(categoria: string): void {
    this.categoriaSelecionadaSource.next(categoria);
  }
}
