import {Component} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { endereco } from './interfaces/endereco';
import { ViacepApiService } from './services/cep-api-services.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buscacepForm: FormGroup = this.fb.group({
    cep: ['', [Validators.required]]
  })

  endereco!: endereco

  constructor(
    private fb: FormBuilder,
    private viacepService: ViacepApiService,
    
  ) { }

  procurarCEP() {
    let cep = this.buscacepForm.get('cep')?.value
    this.viacepService.procurarCEP(cep).subscribe(
      (json) => {
        this.endereco = json
      }
    )
  }
}
