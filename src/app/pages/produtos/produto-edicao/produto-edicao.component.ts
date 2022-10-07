import { Produtos } from './../../models/produtos';
import { ProdutosService } from './../../../services/produtos.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-edicao',
  templateUrl: './produto-edicao.component.html',
  styleUrls: ['./produto-edicao.component.css'],
})
export class ProdutoEdicaoComponent implements OnInit {
  formProduto: Produtos;

  constructor(
    private _router: Router,
    private _route: ActivatedRoute,
    private _authService: AuthenticationService,
    private _produtoService: ProdutosService
  ) {
    this.formProduto = new Produtos();
  }

  ngOnInit(): void {
    if (!this._authService.auth() === true) {
      this._router.navigate(['/login']);
    }

    this.buscarProduto(Number(this._route.snapshot.paramMap.get('id')));
  }

  buscarProduto(id: number) {
    this._produtoService.buscarUmProduto(id).subscribe((data) => {
      this.formProduto = data;
    });
  }

  editar() {
    this._produtoService.edicao(this.formProduto).subscribe((data) => {
      this._router.navigate(['/produto']);
    });
  }
}
