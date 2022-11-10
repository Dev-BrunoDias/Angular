export interface Produto {
    id?: number // Com o ponto de interrogação a campo da interface torna-se opcional
    nome: string
    preco: string
    descricao: string
    foto: string
}