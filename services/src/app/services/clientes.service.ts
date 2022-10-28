import { Injectable } from '@angular/core';

/**
 * providedIn informa onde o serviço será fornecido.
 * 
 * 
 * A idéia de um serviço no Angular é encapsular alguma lógica que pode  ser
 * utilizada em vários locais da sua aplicação!
 */

interface Cliente {
  nome: string
  sobrenome: string
  telefone: string
  id: number
  email:string
  cpf:string 
} 

/**
 * C -> Create
 * R -> Read
 * U -> Update
 * D -> Delete
 */

@Injectable({
  providedIn: 'root' // 'root' faz referência ao AppModule
})
export class ClientesService {

  private clientes: Cliente[] = [
    {
      nome: 'Frederico',
      sobrenome: 'Alves',
      cpf: '11111111111',
      email: 'fredalves@gmail.com',
      telefone: '42435465',
      id: 1
    },
    {
      nome: 'José',
      sobrenome: 'Almir',
      cpf: '00000000000',
      email: 'jose@gmail.com',
      telefone: '4240097',
      id: 2
    },
    {
      nome: 'Renato',
      sobrenome: 'Pereira',
      cpf: '22222222222',
      email: 'renato@gmail.com',
      telefone: '42678465',
      id: 3
    }
  ]
  constructor() { }

  listarClientes():Cliente[] {
    // toda a lógica para acessar a api e pegar os dados
    return this.clientes
  }

  listarClientePeloId(id: number): Cliente | undefined{
    /**
     * O método find() dos arrays serve pra procurar algum valor dentro do array.
     * 
     * é necessário que se passe como parâmetro do método find() uma função.
     * Essa dunção será utilizada dentro de um método para procurar um valor.
     * A função que será passada DEVE retornar sempre um valor booleano
     */

    //SELECT * FROM clientes WHERE id = 2 / igual a operação abaixo 
   const clienteEncontrado = this.clientes.find((c)=>{
      return c.id == id 
    })

    return clienteEncontrado
  }
}
