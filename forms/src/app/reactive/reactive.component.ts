import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {

  /***
   * Reactive Forms possui estruturas para representar o formulário
   * dentro do TypeScript
   */

  /**
   * FormControl representa um elemento de seu formulário
   */
  nome: FormControl = new FormControl('')
  email: FormControl = new FormControl('')
  senha: FormControl = new FormControl('')


  /**
   * FormGroup é uma estrutura do Reactive Forms que permite agruparmos forms controls dentro dela,
   *  para que o acesso aos valores seja mais facil
   */
  dadosForm: FormGroup = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl('')
  })

  constructor() { }

  ngOnInit(): void {
  }

  enviar() {

    console.log(this.nome.value)
    console.log(this.nome.value)
    console.log(this.nome.value)
  }

}
