// wikipedia.service.ts
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WikipediaService {
  private apiUrl = '/api/w/api.php';

  constructor(private http: HttpClient) {}

  searchArticles(term: string): Observable<any> {
    const params = {
      action: 'query',
      format: 'json',
      list: 'search',
      srsearch: term,
    };

    return this.http
      .get(this.apiUrl, { params, responseType: 'text' })
      .pipe(
        map((response: any) => {
          try {
            // Attempt to parse JSON response
            const jsonResponse = JSON.parse(response);

            // Check if the response has the expected structure
            if (jsonResponse.query && jsonResponse.query.search) {
              return jsonResponse;
            } else {
              throw new Error('Invalid JSON response structure');
            }
          } catch (error) {
            // Handle parsing error
            throw new Error('Error parsing JSON response');
          }
        }),
        catchError((error: HttpErrorResponse) => {
          return throwError(error);
        })
      );
  }
}
