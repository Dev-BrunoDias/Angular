import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroComponent } from "./pages/cadastro/cadastro.component";
import { ListarProdutosComponent } from "./pages/listar-produtos/listar-produtos.component";
import { ProdutoComponent } from "./pages/produto/produto.component";

const rotas: Routes = [
    {   //http://localhost:4200
        path:'', // Caminho para acessar a rota ( string vazia significa a rota proncipal)
        redirectTo: 'produtos', // redireciona o usuário para outra no momento que ele entra nessa rota
        pathMatch: 'full'
    },// Cada objeto é uma rota
    {
        //http://localhost:4200/produtos
        path: 'produtos',
        component: ListarProdutosComponent
    },
    {
        path: 'produtos/:idProduto', // rota com o parâmetro idProduto
        component: ProdutoComponent
    },
    {
        path:'cadastro',
        component: CadastroComponent
    }
]

@NgModule({
    declarations: [],
    imports:[
        RouterModule.forRoot(rotas) // modulo que inicia o roteamento e carrega as rotas que estão dentro do array.
    ],
    providers: [],
    exports: [
        RouterModule // exportando o módulo após as rotas terem sido carregadas dentro dele.
    ]
})
export class AppRoutingModule { }