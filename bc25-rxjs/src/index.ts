import path from 'path'
import { Observable, observable } from 'rxjs'
import fs from 'fs'

const filePaths: string[] = [
  path.join(__dirname, 'files', 'app_1.txt'),
  path.join(__dirname, 'files', 'app_2.txt'),
  path.join(__dirname, 'files', 'app_3.txt'),
  path.join(__dirname, 'files', 'app_4.txt'),
  path.join(__dirname, 'files', 'estilo_1.css'),
  path.join(__dirname, 'files', 'estilo_2.css'),
  path.join(__dirname, 'files', 'estilo_3.css'),
  path.join(__dirname, 'files', 'estilo_4.css'),
  path.join(__dirname, 'files', 'estrutura_1.html'),
  path.join(__dirname, 'files', 'estrutura_2.html'),
  path.join(__dirname, 'files', 'estrutura_3.html'),
  path.join(__dirname, 'files', 'estrutura_4.html')
]

const isCSS = /^((.|#){0,1}(\w+-{0,1})+\s*{(\s*(\w+-{0,1})+:\s*(\w+\s*)+;\s*)+\s*}\s*)/i
const isHTML = /^<!DOCTYPE html>/i

function lerArquivos(arquivos: string[]) {
  /**
   * Observable são fontes de dados que enviam dados/informações de forma contínua
   */

  /**
   * A classe Observable recebe como parâmetro um função responsável pela geração
   * dos dados que o Observable enviará
   */


  const leitor = new Observable<string>((subscriber) => {
    /**
   * O método forEach (paraCada) serve pra fazer um laço de repetição dentro do array
   */

    arquivos.forEach((arquivo) => {

      /**
       * readFileSync fará a leitura de um arquivo a partir do caminho desse arquivo no seu computador
       */
      const conteudo = fs.readFileSync(arquivo, { encoding: 'utf-8' })
      subscriber.next(conteudo) // responsável por mandar a mensagem de sucesso
      //subscriber.error() // responsável por mandar a mensagem de erro
      //subscriber.complete() // responsável por mandar a mensagem de completo

      /**
       * ---> Envio de dados do Observable
       * 
       * 3 ESTÁGIOS
       *   -> Sucesso: O Observable conseguiu realizar seu trabalho sem nenhum problema 
       *               e enviou os dados com sucesso
       * 
       *   -> Erro: O Observable teve algum problema durante a sua execução e não conseguiu
       *            realizar sua tarefa de maneira satisfatória e não conseguiu enviar os dados
       *            Quando um Observable passa pelo estágio de erro, sua execução para automaticamente
       * 
       *   -> Complemento: O Observable realizou TODAS as suas tarefas com sucesso e não possui
                           mais nenhum dado para poder enviar.
       */
    })
  })
  return leitor
}


let obs = lerArquivos(filePaths)

/**
 * O método subscribe() dos observables te permite acessar os valores
 * que o observable te envia de forma continua 
 */

/**
 * 1° → Sucesso
 * 2° → Erro
 * 3° → Completo
 */

obs.subscribe(
  (conteudoLido) => {
    console.log('---------- ARQUIVO LIDO COM SUCESSO ----------')
    console.log(conteudoLido)
    console.log('----------------------------------------------\n\n')
  }
)

obs.subscribe(
  (conteudoLido) => {
    console.log(`Este arquivo possui ${conteudoLido.length} caracteres`)
  }
)