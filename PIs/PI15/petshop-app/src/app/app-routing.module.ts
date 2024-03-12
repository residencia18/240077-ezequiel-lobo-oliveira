// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastroAtendimentoComponent } from './cadastro-atendimento/cadastro-atendimento.component';
import { ListagemAtendimentosComponent } from './listagem-atendimentos/listagem-atendimentos.component';
import { EdicaoAtendimentoComponent } from './edicao-atendimento/edicao-atendimento.component';
import { DetalhamentoAtendimentoComponent } from './detalhamento-atendimento/detalhamento-atendimento.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';

const routes: Routes = [
  { path: 'cadastro', component: CadastroAtendimentoComponent, canActivate: [AuthGuard] },
  { path: 'listagem', component: ListagemAtendimentosComponent, canActivate: [AuthGuard] },
  { path: 'edicao/:clienteCpf', component: EdicaoAtendimentoComponent, canActivate: [AuthGuard] },
  { path: 'detalhamento/:id', component: DetalhamentoAtendimentoComponent, canActivate: [AuthGuard] },
  { path: 'login', component: AuthComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
