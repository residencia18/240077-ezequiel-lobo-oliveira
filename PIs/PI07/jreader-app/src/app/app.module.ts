// src/app/app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { EstilizarCategoriasDirective } from '../diretivas/estilizar-categorias.directive';
import { EstilizarVeiculosDirective } from '../diretivas/estilizar-veiculos.directive';

import {
  AppComponent,
  CarrinhoComponent,
  ClassesComponent,
  ObjetosComponent,
  PropriedadesComponent,
  ValorPropriedadeComponent
} from './index';  // Certifique-se de que os caminhos estão corretos

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    ClassesComponent,
    ObjetosComponent,
    PropriedadesComponent,
    ValorPropriedadeComponent,
    EstilizarCategoriasDirective,  // Adicione as diretivas aqui
    EstilizarVeiculosDirective
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
