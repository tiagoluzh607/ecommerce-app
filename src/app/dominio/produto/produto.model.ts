export interface Produto{
    id?: number;
    imagem: string;
    nome: string;
    descricao: string;
    avaliacao: number;
    preco: number;

    carrinho?: boolean;
}