import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonReaderService {
  constructor(private http: HttpClient) {}

  getVeiculos(): Observable<any> {
    return this.http.get<any>('caminho/do/seu/arquivo/veiculos.json');
  }
}
