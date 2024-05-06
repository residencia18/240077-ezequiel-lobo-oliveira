// wikipedia.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  private apiUrl = 'https://en.wikipedia.org/w/api.php'; // Updated API URL

  constructor(private http: HttpClient) {}

  searchArticles(term: string): Observable<any> {
    const params = {
      action: 'query',
      format: 'json',
      list: 'search',
      utf8: '1',
      origin: '*',
      srsearch: encodeURIComponent(term), // Properly encode the search term
    };

    return this.http
      .get(this.apiUrl, { params })
      .pipe(
        map((response: any) => {
          if (response.query && response.query.search) {
            return response;
          } else {
            throw new Error('Invalid JSON response structure');
          }
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }
}
