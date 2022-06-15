import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { Produto } from "../produto/produto.model";

@Injectable({
    providedIn: 'root'
})
export class CarrinhoEmissor{

    subject = new Subject<Produto[]>();
    produtos: Produto[] = [];
    ultimoAdicionado: Produto;

    add(produto: Produto){
        //adicionar o produto na lista interna
        this.ultimoAdicionado = produto;
        let copiaLista = this.produtos.slice();
        copiaLista.push(produto);
        this.produtos = copiaLista;
        
        // notificar o correio que tem lista nova
        this.notifica();
    }

    get(){
        return this.subject.asObservable();
    }

    private notifica(){
        this.subject.next(this.produtos);
    }

}