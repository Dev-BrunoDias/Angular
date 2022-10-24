import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipes';
  dataDeHoje: Date = new Date()

  itens = [
    '09511542733',
    '19200032182',
    '12376509834'
  ]
}
