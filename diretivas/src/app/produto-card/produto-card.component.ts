import { Component, Input, OnInit } from '@angular/core';
import { Produto } from '../interfaces/Produto';

@Component({
  selector: 'produto-card',
  templateUrl: './produto-card.component.html',
  styleUrls: ['./produto-card.component.css']
})
export class ProdutoCardComponent implements OnInit {

  @Input()  
  prod: Produto = {
    descricao: '',
    estoque: 0,
    imagem: '',
    nome: '',
    preco: 0
  }

  mostrarProduto: boolean = true

  esconderProduto() {
    this.mostrarProduto =false
  }

  const produto = [];
  const produtos = this.produto.indexOf();
  this.produto.splice(index, 1);

 

 
  
  
  

  constructor() { }

  ngOnInit(): void {
  }

}
