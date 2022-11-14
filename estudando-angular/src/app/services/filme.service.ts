import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Filme } from '../model/filme';

@Injectable({
  providedIn: 'root'
})
export class FilmeService {

  constructor(private http:HttpClient) { }

  private baseUrl: string = "http://localhost:3000/films"

  public getAll(): Observable<Filme[]> {
   return this.http.get<Filme[]>(this.baseUrl);
  }
}
