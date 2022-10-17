import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  /**
   * Event Emitter é uma classe que te permite
   * criar eventos costomizados dentro do Angular
   */
  @Output()
  uploadCompleto: EventEmitter<string> = new EventEmitter

  constructor() { }

  ngOnInit(): void {
  }

    fazerupload(){
      alert('upload iniciado')
      /**
       * O método emit() serve pra iniciar a emissão do
       * evento personaliazdo
       */

      this.uploadCompleto.emit()
    }
}
