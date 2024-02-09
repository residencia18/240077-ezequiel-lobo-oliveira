import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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

import { JsonReaderService } from './services/json-reader.service'; 
import { CommunicationService } from './services/communication.service'; 

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
    FormsModule,
    HttpClientModule
  ],
  providers: [
    JsonReaderService,
    CommunicationService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
