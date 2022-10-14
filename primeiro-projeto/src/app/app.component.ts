import { Component } from '@angular/core';

/**
 * templateUrl serve para informar ao componente 
 * qual arquivo HTML ele deve mostrar quando o mesmo
 * ser utilizado.
 * 
 * styleUrls serve para informar os caminhos dos arquivos 
 * CSS que o componente utilizará.
 * 
 * 'selector' serve para informar como aquele componente poderá
 * ser chamado dentro do projeto Angular dentrp de outros arquivos
 * HTML de outros componentes.
 */

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeiro-projeto';
}
