import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.componente';
import { NavbarComponent } from './navbar/navbar.component';


@NgModule({
  /**
   * DECLARATIONS serve para registrar 
   * componentes, pipes, diversas outras estruturas
   */
  declarations: [
    AppComponent,
    ProdutoComponent,
    NavbarComponent
  ],

  /**
   * IMPORTS serve pra registar outros módulos dentro 
   * de outro módulo
   * SERVE EXCLUSIVAMENTE PARA OUTROS MÓDULOS
   */
  imports: [
    BrowserModule,
  ],
  /**
   * PROVIDERS serve pra registar serviços e interceptadores HTTP
   */
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
