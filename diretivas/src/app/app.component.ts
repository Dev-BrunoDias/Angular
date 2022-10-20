import { Component } from '@angular/core';
import { Produto } from './interfaces/Produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'diretivas';
  nome: string = ''
  imagem: string = ''
  preco: number = 0
  estoque: number = 0
  descricao: string =''
 
  produtos: Produto[] = []
  //array de produtos 

  adicionarProduto(evento: any): void {

    evento.preventDefault()
    evento.stopPropagation()
    
    this.produtos.push({ //objeto sempre dentro de chaves{}
      descricao: this.descricao,
      estoque: this.estoque,
      imagem: this.imagem,
      nome: this.nome,
      preco: this.preco
    })
    this.apagarInput()
  }
  apagarInput(){
    this.nome = ''
    this.imagem = ''
    this.preco = 0
    this.estoque = 0
    this.descricao = ''
  }
}
