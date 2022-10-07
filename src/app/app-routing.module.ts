import { ProdutoEdicaoComponent } from './pages/produtos/produto-edicao/produto-edicao.component';
import { ProdutoCadastroComponent } from './pages/produtos/produto-cadastro/produto-cadastro.component';
import { ProdutoContentComponent } from './pages/produtos/produto-content/produto-content.component';
import { UserEdicaoComponent } from './pages/users/user-edicao/user-edicao.component';
import { UserCadastroComponent } from './pages/users/user-cadastro/user-cadastro.component';
import { UserContentComponent } from './pages/users/user-content/user-content.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserContentComponent },
  { path: 'user-cadastro', component: UserCadastroComponent },
  { path: 'user-edicao/:id', component: UserEdicaoComponent },
  { path: 'produto', component: ProdutoContentComponent },
  { path: 'produto-cadastro', component: ProdutoCadastroComponent },
  { path: 'produto-edicao/:id', component: ProdutoEdicaoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
