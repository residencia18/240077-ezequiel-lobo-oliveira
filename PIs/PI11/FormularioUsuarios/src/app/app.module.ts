import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormUsuarioComponent } from './form-usuario/form-usuario.component';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    FormUsuarioComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
