import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  urlUser: string = 'http://localhost:3000/usuarios';

  constructor(private _http: HttpClient) {}

  buscarUsuarios(): Observable<any> {
    return this._http.get<any>(this.urlUser);
  }

  buscarUmUsuario(id: number): Observable<any> {
    return this._http.get<any>(this.urlUser + '/' + id);
  }

  cadastro(dados: any): Observable<any> {
    return this._http.post<any>(this.urlUser, dados);
  }

  edicao(dados: any): Observable<any> {
    return this._http.put<any>(this.urlUser + '/' + dados.id, dados);
  }

  delete(id: number): Observable<any> {
    return this._http.delete<any>(this.urlUser + '/' + id);
  }
}
