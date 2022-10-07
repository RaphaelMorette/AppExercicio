import { ProdutosService } from './../../../services/produtos.service';
import { AuthenticationService } from './../../../services/authentication.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produto-content',
  templateUrl: './produto-content.component.html',
  styleUrls: ['./produto-content.component.css', '../../shared/style.css'],
})
export class ProdutoContentComponent implements OnInit {
  listaProdutos: any[] = [];

  constructor(
    private _router: Router,
    private _authService: AuthenticationService,
    private _produtosService: ProdutosService
  ) {}

  ngOnInit(): void {
    if (!this._authService.auth() === true) {
      this._router.navigate(['/login']);
    }

    this.listar();
  }

  listar() {
    this._produtosService.buscarProdutos().subscribe((data) => {
      this.listaProdutos = data;
    });
  }

  criarProduto() {
    this._router.navigate(['/produto-cadastro']);
  }

  goAltera(id:number) {
    this._router.navigate(['/produto-edicao', id]);
  }

  deletar(id: number) {
    this._produtosService.delete(id).subscribe((data) => {
      this.listar();
    });
  }
}
