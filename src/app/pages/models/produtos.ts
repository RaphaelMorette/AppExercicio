import { Validators } from '@angular/forms';
export class Produtos {
  id: number =  0;
  nome: string = '';
  marca: string = ''
  modelo: string = ''
  precoCusto: number = 0.00;
  precoVenda: number = 0.00
  estoqueMinimo: number = 0;
  estoqueAtual: number = 0;
}
