import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor() {
    setTimeout(() => {
      this.objStyle['color'] = 'blue';
    }, 5000)
    
   }

  public user: string = "Bruno Dias";

  public image: any = {
    src:"https://gr3web.com.br/wp-content/uploads/2022/07/Avatares-legais-para-WhatsApp-para-homens-01.jpg",
    alt:"Avatar Bruno Dias"
  };

  public clicar(): void {
    alert("Clicou!");
  }

  public objStyle: any = {
    'font-size': '50px',
    'color': 'red'
  }

  public isError: boolean = false
  public classCor: string = "red"

  public sapinho: boolean = true
  public mudarSapinho(): void {
    this.sapinho = !this.sapinho;
  }

  public peixes: string[] = [
    "tubarão",
    "polvo",
    "peixe palhaço",
    "baiacu",
    "cavalo-marinho",
    "lula",
    "carpa"
  ];

  public textoPipe: string = "Texto de exemplo (pipe)";
  public numberPipe: number = 30.3334;
  public nowPipe = new Date();
  public objProfPipe = {
    nome: "Gabriel Braga",
    idade: 20,
    area: "Tecnologia"
  }

}
