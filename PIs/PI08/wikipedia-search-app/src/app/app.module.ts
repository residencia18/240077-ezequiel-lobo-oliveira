// src/app/app.module.ts
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { NegritoPipe } from './negrito.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BarraDeBuscaComponent } from './barra-de-busca/barra-de-busca.component';
import { ResultadoDaPesquisaComponent } from './resultado-da-pesquisa/resultado-da-pesquisa.component';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http'; // Certifique-se de importar o módulo HTTP

@NgModule({
  declarations: [
    AppComponent,
    BarraDeBuscaComponent,
    ResultadoDaPesquisaComponent,
    NegritoPipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule, // Adicione HttpClientJsonpModule aqui
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
