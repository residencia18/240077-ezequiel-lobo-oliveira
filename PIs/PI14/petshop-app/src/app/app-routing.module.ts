import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroAtendimentoComponent } from './cadastro-atendimento/cadastro-atendimento.component';
import { ListagemAtendimentosComponent } from './listagem-atendimentos/listagem-atendimentos.component';
import { EdicaoAtendimentoComponent } from './edicao-atendimento/edicao-atendimento.component';
import { DetalhamentoAtendimentoComponent } from './detalhamento-atendimento/detalhamento-atendimento.component';
import { AuthComponent } from './auth/auth.component'; // Importe o componente de autenticação

const routes: Routes = [
  { path: 'cadastro', component: CadastroAtendimentoComponent },
  { path: 'listagem', component: ListagemAtendimentosComponent },
  { path: 'edicao/:clienteCpf', component: EdicaoAtendimentoComponent },
  { path: 'detalhamento/:id', component: DetalhamentoAtendimentoComponent },
  { path: 'login', component: AuthComponent }, // Rota para o componente de autenticação (login)
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
