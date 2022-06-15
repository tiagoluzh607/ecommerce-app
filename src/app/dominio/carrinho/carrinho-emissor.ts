import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { map } from "rxjs/operators";
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
        produto.carrinho = true;
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

    getTotal(){
        return this.subject.asObservable().pipe(
            map((produtos)=>{
                if(!produtos) return 0;
                return produtos.length;
            })
        );
    }

    remove(produto: Produto){
        produto.carrinho = false;
        let listaNova = this.produtos.filter((p)=>p.id!=produto.id)
        this.produtos = listaNova.slice();
        this.notifica();
    }

    private notifica(){
        this.subject.next(this.produtos);
    }

}