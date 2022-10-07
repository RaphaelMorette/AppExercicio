import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  user: string = '';
  password: string = '';
  loginInvalido: string = 'noShow';

  constructor(private _router: Router, private _userService: UsersService) {}

  logIn() {
    if (this.user === '') {
      window.alert('Usuário em branco!');
    } else if (this.password === '') {
      window.alert('Senha em branco!');
    } else {
      this.autenticar();
    }
  }

  autenticar() {
    this._userService.buscarUsuarios().subscribe((dados) => {
      dados.forEach((item: any) => {
        if (item.nome === this.user && item.senha === this.password) {
          window.localStorage.setItem('user', item.nome);
          if (item.acesso === 'total') {
            window.localStorage.setItem('acesso', item.acesso);
          }
          this._router.navigate(['/home']);
          // console.log('Acesso permitido');
        } else {
          // console.log('Acesso não permitido');
          this.loginInvalido = 'show';
          setTimeout(() => {
            this.loginInvalido = 'noShow';
          }, 3000);
          return;
        }
      });
    });
  }
}
