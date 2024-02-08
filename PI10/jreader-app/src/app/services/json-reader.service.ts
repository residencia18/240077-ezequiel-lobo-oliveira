// src/app/json-reader.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JsonReaderService {
  private jsonUrl = 'assets/veiculos.json';

  constructor(private http: HttpClient) {}

  getVeiculos(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
