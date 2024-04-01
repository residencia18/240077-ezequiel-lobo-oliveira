import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getFirstCountryData(): Observable<any> {
    return this.http.get<any>('https://restcountries.com/v3.1/all?limit=1');
  }

  transformDataToFormFields(data: any): any[] {
    const fields = [];
    for (const key in data[0]) {
      if (Object.prototype.hasOwnProperty.call(data[0], key)) {
        const field = {
          type: this.getFieldType(data[0][key]),
          nome: key,
          rotulo: key
        };
        fields.push(field);
      }
    }
    return fields;
  }

  private getFieldType(value: any): string {
    if (typeof value === 'number') {
      return 'number';
    } else if (typeof value === 'boolean') {
      return 'checkbox';
    } else {
      return 'text';
    }
  }
}
