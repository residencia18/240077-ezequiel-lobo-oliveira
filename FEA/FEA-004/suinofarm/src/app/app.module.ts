// Importe os módulos necessários
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

// Importe os seus componentes aqui
import { ControlePesoComponent } from './controle-peso/controle-peso.component';
import { EdicaoPesoComponent } from './edicao-peso/edicao-peso.component';
import { SuinoCadastroComponent } from './suino-cadastro/suino-cadastro.component';
import { SuinoListagemComponent } from './suino-listagem/suino-listagem.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastroPesoComponent } from './cadastro-peso/cadastro-peso.component';
import { AuthComponent } from './auth/auth.component';
import { SuinoEdicaoComponent } from './suino-edicao/suino-edicao.component';
import { CadastroManejoComponent } from './manejo-sanitario/manejo-sanitario.component';
import { HistoricoManejoComponent } from './historico-manejo/historico-manejo.component';


@NgModule({
  declarations: [
    AuthComponent,
    AppComponent,
    CadastroPesoComponent,
    ControlePesoComponent,
    EdicaoPesoComponent,
    SuinoCadastroComponent,
    SuinoListagemComponent,
    DashboardComponent,
    SuinoEdicaoComponent,
    CadastroManejoComponent,
    HistoricoManejoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyAEenTbuLW6QkWSCPd-gMNr93VQPP9AwVk",
      authDomain: "suinofarm-manager.firebaseapp.com",
      databaseURL: "https://suinofarm-manager-default-rtdb.firebaseio.com",
      projectId: "suinofarm-manager",
      storageBucket: "suinofarm-manager.appspot.com",
      messagingSenderId: "960113480429",
      appId: "1:960113480429:web:4fc9a410a1ca5c9d2cf2e4"
    }),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
