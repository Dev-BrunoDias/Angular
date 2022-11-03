import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GithubUser } from './interfaces/GithubUsers';
import { GithubApiService } from './services/github-api.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  githubForm: FormGroup = this.fb.group({
    username: ['', [ Validators.required ]]
  })

  gUser!: GithubUser 

  constructor(
    private fb: FormBuilder,
    private githubService: GithubApiService
    
  ) {}

    procurar() {
      const username = this.githubForm.get('username')?.value // recuperando o nome do usuario que deve ser procurado
      this.githubService.procurarUsuario(username).subscribe(
        (user) =>{
          this.gUser = user
        }
      )
    }

}
