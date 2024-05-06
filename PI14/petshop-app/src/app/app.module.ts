// Importe os módulos necessários
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
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AuthComponent } from './auth/auth.component';


@NgModule({
  declarations: [
    AuthComponent,
    AppComponent,
    CadastroAtendimentoComponent,
    ListagemAtendimentosComponent,
    EdicaoAtendimentoComponent,
    DetalhamentoAtendimentoComponent
  ],
  imports: [
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Inicialize o Firebase com a configuração do ambiente
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyDWB3HnIpD_A1sP9w9mldueXqMQn9Y0P1c",
      authDomain: "shop-79eaa.firebaseapp.com",
      databaseURL: "https://shop-79eaa-default-rtdb.firebaseio.com",
      projectId: "shop-79eaa",
      storageBucket: "shop-79eaa.appspot.com",
      messagingSenderId: "271724379478",
      appId: "1:271724379478:web:06726cedaab0d43bc12af7"
    }),
    AngularFireDatabaseModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
