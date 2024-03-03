// app-routing.module.ts

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroAtendimentoComponent } from './cadastro-atendimento/cadastro-atendimento.component';
import { ListagemAtendimentosComponent } from './listagem-atendimentos/listagem-atendimentos.component';
import { EdicaoAtendimentoComponent } from './edicao-atendimento/edicao-atendimento.component';
import { DetalheAtendimentoComponent } from './detalhamento-atendimento/detalhamento-atendimento.component';

const routes: Routes = [
  { path: 'cadastro', component: CadastroAtendimentoComponent },
  { path: 'listagem', component: ListagemAtendimentosComponent },
  { path: 'edicao/:id', component: EdicaoAtendimentoComponent },
  { path: 'detalhe/:id', component: DetalheAtendimentoComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' } // Rota padrão
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
