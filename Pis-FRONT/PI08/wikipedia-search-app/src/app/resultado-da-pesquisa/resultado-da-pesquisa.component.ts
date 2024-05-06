import { Component, Input, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-resultado-da-pesquisa',
  templateUrl: './resultado-da-pesquisa.component.html',
  styleUrls: ['./resultado-da-pesquisa.component.css'],
})
export class ResultadoDaPesquisaComponent {
  @Input() resultado: any[] = []; 
  constructor(private sanitizer: DomSanitizer) {}

  getArticleLink(article: any): string {
    return `https://en.wikipedia.org/wiki/${encodeURIComponent(article.title)}`;
  }

  sanitizeHtml(html: string | null): SafeHtml | null {
    return html ? this.sanitizer.sanitize(SecurityContext.HTML, html) : null;
  }
}
