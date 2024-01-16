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
} from './index';

@NgModule({
  declarations: [
    AppComponent,
    CarrinhoComponent,
    ClassesComponent,
    ObjetosComponent,
    PropriedadesComponent,
    ValorPropriedadeComponent,
    EstilizarCategoriasDirective,
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
