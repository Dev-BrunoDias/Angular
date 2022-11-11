import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestarNumeroGuard implements CanActivate { // Utilizado para proteger a rota no momento da entrada
  // retornar true -> pode seguir
  // retornar false -> não pode seguir
  canActivate(
    route: ActivatedRouteSnapshot, // objeto que permite recuperar os parâmetros passados para a rota
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // saber se o id informado é um número ou não
    // se for um número - pode seguir
    // se não for um número - não pode seguir

    // recuperar o parâmetro que guarda o valor id

   const idProduto =  route.paramMap.get('idProduto')
   if(isNaN(Number(idProduto))){
    return false
   } else {
    return true
   }

    return true
  }
}
