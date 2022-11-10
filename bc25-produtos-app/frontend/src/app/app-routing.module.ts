import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { CadastroComponent } from "./pages/cadastro/cadastro.component";
import { ErrorPageComponent } from "./pages/error-page/error-page.component";
import { ListarProdutosComponent } from "./pages/listar-produtos/listar-produtos.component";
import { ProdutoComponent } from "./pages/produto/produto.component";

const rotas: Routes = [
    {
        // http://localhost:4200/produtos
        path: 'produtos',  //caminho para acessar a rota
        component: ListarProdutosComponent
        
    }, // cada objeto é uma rota
    {
        // http://localhost:4200
        path: '', // string vazia rota principal
        redirectTo: 'produtos', //redireciona o usuario.
        pathMatch: 'full'
    },
    {
        path: 'produtos/cadastro',
        component: CadastroComponent
    },
    {
        path: 'produtos/:idProduto', // rota com o parametro idProduto
        component: ProdutoComponent
    },
    {
        path: '**',
        component: ErrorPageComponent
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