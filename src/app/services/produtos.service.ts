import { Produtos } from './../pages/models/produtos';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  urlProdutos: string = 'http://localhost:3000/produtos';

  constructor(private _http: HttpClient) {}

  buscarProdutos(): Observable<any> {
    return this._http.get<any>(this.urlProdutos);
  }

  buscarUmProduto(id: number): Observable<Produtos> {
    return this._http.get<Produtos>(this.urlProdutos + '/' + id);
  }

  cadastro(dados: Produtos): Observable<Produtos> {
    return this._http.post<Produtos>(this.urlProdutos, dados);
  }

  edicao(dados: Produtos): Observable<Produtos> {
    return this._http.put<Produtos>(this.urlProdutos + '/' + dados.id, dados);
  }

  delete(id: number): Observable<Produtos> {
    return this._http.delete<Produtos>(this.urlProdutos + '/' + id);
  }
}
