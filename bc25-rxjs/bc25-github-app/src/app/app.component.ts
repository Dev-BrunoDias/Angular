import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { GithubRepo } from './interfaces/GithubRepo';
import { GithubUser } from './interfaces/GithubUsers';
import { GithubApiService } from './services/github-api.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  githubForm: FormGroup = this.fb.group({
    username: ['', [Validators.required]]
  })

  gUser!: GithubUser
  repos: GithubRepo[] = []

  constructor(
    private fb: FormBuilder,
    private githubService: GithubApiService,
    private snackBar: MatSnackBar // componente do material para mostrar mensagens

  ) { }

  procurar() {
    const username = this.githubForm.get('username')?.value // recuperando o nome do usuario que deve ser procurado
    this.githubService.procurarUsuario(username).subscribe(
      (user) => {
        this.gUser = user
      },
      (erro) => {
        //HttpErrorResponse
        // preciso saber se o meu erro vem dessa classe

        if (erro instanceof HttpErrorResponse) {
          if (erro.status == 404) {
            this.snackBar.open(`O usuário ${username} não foi encontrado :(`, 'OK') // Abrindo o snakBar na tela
          }
        }
      }
    )

    this.githubService.procurarRepos(username).subscribe(
      (repos) => {
        this.repos = repos
      }
    )
  }
}
