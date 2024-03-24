import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SuinoCadastroComponent } from './suino-cadastro/suino-cadastro.component';
import { ControlePesoComponent } from './controle-peso/controle-peso.component';
import { SuinoListagemComponent } from './suino-listagem/suino-listagem.component';
import { EdicaoPesoComponent } from './edicao-peso/edicao-peso.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthComponent } from './auth/auth.component';
import { CadastroManejoComponent } from './manejo-sanitario/manejo-sanitario.component';
import { HistoricoManejoComponent } from './historico-manejo/historico-manejo.component';

const routes: Routes = [
  { path: 'historico-manejo', component: HistoricoManejoComponent},
  { path: 'login', component:AuthComponent },
  { path: 'dashboard', component:DashboardComponent },
  { path: 'cadastro', component: SuinoCadastroComponent },
  { path: 'controle-peso', component: ControlePesoComponent },
  { path: 'edicao/:id', component: EdicaoPesoComponent },
  { path: 'listagem', component: SuinoListagemComponent },
  { path: 'manejo-sanitario', component: CadastroManejoComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' } // Redireciona para a página de cadastro se a rota não for encontrada
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
