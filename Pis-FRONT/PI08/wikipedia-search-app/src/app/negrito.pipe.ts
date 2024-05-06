// src/app/negrito.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'negrito'
})
export class NegritoPipe implements PipeTransform {
    transform(texto: string, termoBusca: string): string {
        // Implemente a lógica para adicionar tags de negrito ao termo de busca no texto
        return texto; // Replace this line with your logic to add bold tags to the search term in the text
    }
}
