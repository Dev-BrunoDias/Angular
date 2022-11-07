import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArrayF } from './interface/array-f';
import { IFilme } from './interface/IFilme';

import { FilmesService } from './services/filmes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  filmeForm: FormGroup = this.fb.group({
    paginas: ['', [Validators.required]]
  })

  gFilme!: ArrayF
  g!: IFilme

  constructor(
    private fb: FormBuilder,
    private filmesService: FilmesService
  ) { }

  procurar() {
    const pagina = this.filmeForm.get('paginas')?.value

    this.filmesService.procurarFilme(pagina).subscribe((geral) => {
      console.log(geral)
      this.gFilme = geral
    })
  }
}