export interface Produto{
    imagem: string;
    nome: string;
    descricao: string;
    avaliacao: number;
    preco: number;

    carrinho?: boolean;
}