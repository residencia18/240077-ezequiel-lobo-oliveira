// Importe os módulos necessários
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';

// Importe os componentes que você criou
import { CadastroSuinoComponent } from './cadastro-suino/cadastro-suino.component';
import { ListagemSuinoComponent } from './listagem-suino/listagem-suino.component';
import { ControlePesoComponent } from './controle-peso/controle-peso.component';
import { CadastroPesoComponent } from './cadastro-peso/cadastro-peso.component';
import { EdicaoPesoComponent } from './edicao-peso/edicao-peso.component';
import { AutenticacaoComponent } from './autenticacao/autenticacao.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroSuinoComponent,
    ListagemSuinoComponent,
    ControlePesoComponent,
    CadastroPesoComponent,
    EdicaoPesoComponent,
    AutenticacaoComponent
  ],
  imports: [
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    // Inicialize o Firebase com a configuração do ambiente
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
