import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
/**
   * String Interpolation: utilizar valores que propriedades
   * possuem para mostrá-los para o usuário
   */
  /**
   * event binding: utilizado para ouvir o evento da DOM dentro 
   * do angular
   */
  title = 'data-binding';
  n1: number = 0
  n2: number = 0
  tipoInput: string = 'text'
  
  somar(x: number, y: number){
    return x + y
  }

  mudarTipoDoInput(): void {
    if(this.tipoInput == 'password'){
      this.tipoInput = 'text'
    }else {
      this.tipoInput = 'password'
    }
  }
}
