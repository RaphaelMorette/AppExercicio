import { ProdutosService } from './../../../services/produtos.service';
import { Produtos } from './../../models/produtos';
import { HttpClient } from '@angular/common/http';
import { UsersService } from './../../../services/users.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css'],
})
export class ProdutoCadastroComponent implements OnInit {

  formProduto: Produtos;

  constructor(
    private _router: Router,
    private _authService: AuthenticationService,
    private _produtoService: ProdutosService
  ) {
    this.formProduto = new Produtos();
  }

  ngOnInit(): void {
    if (!this._authService.auth() === true) {
      this._router.navigate(['/login']);
    }
  }

  cadastrar() {
    if(this.formProduto.nome === '' || this.formProduto.marca === '' || this.formProduto.modelo === ''){
      window.alert('Preencha todos os dados!')
    } else {
      this._produtoService.cadastro(this.formProduto).subscribe(data => {
        this._router.navigate(['/produto'])
      })
    }

  }
}
