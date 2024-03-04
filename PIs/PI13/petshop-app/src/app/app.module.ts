// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CadastroAtendimentoComponent } from './cadastro-atendimento/cadastro-atendimento.component';
import { ListagemAtendimentosComponent } from './listagem-atendimentos/listagem-atendimentos.component';
import { EdicaoAtendimentoComponent } from './edicao-atendimento/edicao-atendimento.component';
import { DetalhamentoAtendimentoComponent } from './detalhamento-atendimento/detalhamento-atendimento.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat'


@NgModule({
  declarations: [
    AppComponent,
    CadastroAtendimentoComponent,
    ListagemAtendimentosComponent,
    EdicaoAtendimentoComponent,
    DetalhamentoAtendimentoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyCdC5ocAVY7ysRmD5HbShteLgO2Z0bzWPk",
      authDomain: "petshop-app-e1a76.firebaseapp.com",
      databaseURL: "https://petshop-app-e1a76-default-rtdb.firebaseio.com",
      projectId: "petshop-app-e1a76",
      storageBucket: "petshop-app-e1a76.appspot.com",
      messagingSenderId: "898956532864",
      appId: "1:898956532864:web:26d1be6595e480ba51da65"
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
