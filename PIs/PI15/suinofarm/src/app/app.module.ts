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

// Importe os seus componentes aqui
import { ControlePesoComponent } from './controle-peso/controle-peso.component';
import { EdicaoPesoComponent } from './edicao-peso/edicao-peso.component';
import { SuinoCadastroComponent } from './suino-cadastro/suino-cadastro.component';
import { SuinoListagemComponent } from './suino-listagem/suino-listagem.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CadastroPesoComponent } from './cadastro-peso/cadastro-peso.component';
import { AuthComponent } from './auth/auth.component';

@NgModule({
  declarations: [
    AuthComponent,
    AppComponent,
    CadastroPesoComponent,
    ControlePesoComponent,
    EdicaoPesoComponent,
    SuinoCadastroComponent,
    SuinoListagemComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
