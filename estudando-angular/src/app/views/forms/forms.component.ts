import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent  {

  public formulario: FormGroup; 

  constructor(private formBuilder: FormBuilder) {
    this.formulario = formBuilder.group({
      nome: ["",[Validators.required]],
      cor: ["", [Validators.required]],
      preco: ["", [Validators.required, Validators.min(0)]]
    });
   }

  public heroi: any = {
    nome: "",
    idade: NaN,
    poder: ""
  }

  cadastrarFruta(): void {
    if(this.formulario.valid){
      alert("Cadastrado!")
    }else {
      alert("Formulário inválido!")
    }
  }

}
