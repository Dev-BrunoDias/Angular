import { Component } from '@angular/core';
import { Produto } from './interfaces/Produto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
   title = 'diretivas';
  // p: Produto = {
  //   nome: 'Xbox',
  //   descricao: 'Console da Microsoft',
  //   estoque: 250,
  //   preco: 4000,
  //   imagem: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80'
  // }

  nome: string = ''
  imagem: string = ''
  preco: number = 0
  estoque: number = 0
  descricao: string = ''


  produtos: Produto[] = []

  adicionarProduto(evento: any): void {
    console.log(evento)
    evento.preventDefault()
    evento.stopPropagation()

    this.produtos.push({
      descricao: this.descricao,
      imagem: this.imagem,
      preco: this.preco,
      estoque: this.estoque,
      nome: this.nome
    })
  }

  excluirProduto(indexExclusao: String){
    for (const iterator of this.produtos) {
      if(iterator.nome == indexExclusao){
        const x = this.produtos.indexOf(iterator)
        this.produtos.splice(x, 1)
      }
    }
  }

}
// preventDefaut() faz com que o comportamento padrão de um elemento HTML seja anulado.
// stopPropagation() evita com que a emissão do evento afete outros elementos html.