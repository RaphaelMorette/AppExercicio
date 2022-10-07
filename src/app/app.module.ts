import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './pages/shared/footer/footer.component';
import { HeaderComponent } from './pages/shared/header/header.component';
import { UserContentComponent } from './pages/users/user-content/user-content.component';
import { UserCadastroComponent } from './pages/users/user-cadastro/user-cadastro.component';
import { UserEdicaoComponent } from './pages/users/user-edicao/user-edicao.component';
import { ProdutoContentComponent } from './pages/produtos/produto-content/produto-content.component';
import { ProdutoCadastroComponent } from './pages/produtos/produto-cadastro/produto-cadastro.component';
import { ProdutoEdicaoComponent } from './pages/produtos/produto-edicao/produto-edicao.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    UserContentComponent,
    UserCadastroComponent,
    UserEdicaoComponent,
    ProdutoContentComponent,
    ProdutoCadastroComponent,
    ProdutoEdicaoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
