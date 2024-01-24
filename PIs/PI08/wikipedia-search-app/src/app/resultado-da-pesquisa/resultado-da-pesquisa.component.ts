import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultado-da-pesquisa',
  templateUrl: './resultado-da-pesquisa.component.html',
  styleUrls: ['./resultado-da-pesquisa.component.css'],
})
export class ResultadoDaPesquisaComponent {
  @Input() resultado: any[] = [];

  constructor() {}

  getArticleLink(article: any): string {
    // Construa o link para a página completa do artigo na Wikipédia
    return `https://en.wikipedia.org/wiki/${encodeURIComponent(article.title)}`;
  }
}
