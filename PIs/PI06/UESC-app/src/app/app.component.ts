import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NoticiasComponent } from "./noticias/noticias.component";
import { DestaqueComponent } from "./destaque/destaque.component";
import { ServicosComponent } from "./servicos/servicos.component";
import { ResultadosComponent } from "./resultados/resultados.component";
import { MenuComponent } from "./menu/menu.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, NoticiasComponent, DestaqueComponent, ServicosComponent, ResultadosComponent, MenuComponent]
})
export class AppComponent {
  title = 'UESC-app';
}
