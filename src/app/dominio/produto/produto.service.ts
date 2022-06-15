import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { combineLatest, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { CarrinhoEmissor } from '../carrinho/carrinho-emissor';
import { Produto } from './produto.model';

@Injectable({
    providedIn: 'root'
})
export class ProdutoService{

    API = environment.urlApi;
    endpoint = 'produtos';
    
    constructor(
        private http: HttpClient,
        private carrinhoEmissor: CarrinhoEmissor
    ){}

    produtos: Produto[] = [];

    selectAll(): Produto[]{
        return this.produtos;
    }

    selectAllAPI(): Observable<Produto[]>{

        return combineLatest(
            this.http.get<Produto[]>(`${this.API}/${this.endpoint}`),
            this.carrinhoEmissor.get()
        ).pipe(
            map(([produtosApi,produtosCarrinho])=>{
                if(!produtosApi) return produtosApi;
                if(!produtosCarrinho) return produtosApi;
                return produtosApi.map(pA=>{
                    pA.carrinho = !!produtosCarrinho.find(pC=>pC.id==pA.id);
                    return pA;
                });
            })
        );

         
        // tranformar a propriedade carrinho se o produto da API estiver no carrinho

    }

    selectId(id: number): Produto {
        return this.produtos.find(e=>e.id==id);
    }

    selectIdAPI(id: number): Observable<Produto>{
        return this.http.get<Produto>(`${this.API}/${this.endpoint}/${id}`);
    }

}