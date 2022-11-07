import { Injectable } from '@angular/core';
import { IFilme } from '../interface/IFilme';
import { HttpClient } from '@angular/common/http';
import { ArrayF } from '../interface/array-f';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {

  private readonly baseURL = 'https://api.themoviedb.org/3/movie/now_playing?api_key=9c24ad38aa6491ef8eaaca5968400bbf&language=pt-BR'

  constructor(
    private http: HttpClient
  ) { }

  procurarFilme(pagina: number) {
    return this.http.get<ArrayF>(this.baseURL + "&page=" + pagina)
  }

}






