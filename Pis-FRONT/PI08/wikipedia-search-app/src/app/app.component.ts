// app.component.ts
import { Component } from '@angular/core';
import { WikipediaService } from './wikipedia.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  resultadoPesquisa: any = [];

  constructor(private wikipediaService: WikipediaService) {}

  // app.component.ts
buscar(termo: string): void {
  this.wikipediaService.searchArticles(termo).subscribe(
    (response: any) => {
      console.log('Resposta da API:', response);
      this.resultadoPesquisa = response.query.search;
    },
    (error) => {
      console.error('Erro na chamada da API:', error);

      // Check if the error is due to parsing
      if (error instanceof SyntaxError) {
        console.error('Error parsing JSON response');
      }
    }
  );
}

}
