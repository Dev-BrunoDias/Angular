import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/interfaces/Produto';
import { ProdutosApiService } from 'src/app/services/produtos-api.service';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';


@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  produtoForm: FormGroup = new FormGroup({
    nome: new FormControl('', [Validators.required]),
    preco: new FormControl('', [Validators.required]),
    descricao: new FormControl('', [Validators.required]),
    foto: new FormControl('')
  })

  constructor(
    private rota: ActivatedRoute,
    private produtoService: ProdutosApiService,
    private snackBar: MatSnackBar,
    private router: Router // objeto que permite fazer o roteamento dentro do arquivo Typescript
  ) { }
  

  ngOnInit(): void {
  }

  salvarProduto() {
    const produto : Produto = this.produtoForm.value

    this.produtoService.criarProduto(produto).subscribe(
      (prod) => {
        console.log(prod)
        this.snackBar.open('Produto salvo com sucesso!', 'fechar', {
          duration: 5000 // tempo de duração que aparece ma tela
        })
        this.router.navigateByUrl('/produtos') // redirecionando o usuário para página de produtos
        
      }
    )
  }

}
