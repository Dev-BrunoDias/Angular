import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit',
  templateUrl: './credit.component.html',
  styleUrls: ['./credit.component.css']
})
export class CreditComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  nomeCartao: string = ""

  @Input()
  numeroCartao: string = ""
  
  @Input()
  mes: string = ''

  @Input()
  ano: string = ''

  @Input()
  cvc: string = ''

  
}
