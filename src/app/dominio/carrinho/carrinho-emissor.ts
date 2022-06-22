import { Injectable } from "@angular/core";
import { BehaviorSubject, Subject } from "rxjs";
import { map } from "rxjs/operators";
import { Produto } from "../produto/produto.model";
import { CarrinhoDaoService } from "./carrinho-dao.service";

@Injectable({
    providedIn: 'root'
})
export class CarrinhoEmissor{

    subject = new BehaviorSubject<Produto[]>(null);
    produtos: Produto[] = [];
    ultimoAdicionado: Produto;

    constructor(
        private carrinhoDao: CarrinhoDaoService  
      ){
          if(this.carrinhoDao.has()){
              this.produtos = this.carrinhoDao.get();
              this.notifica();
          }
      }

    add(produto: Produto){
        //adicionar o produto na lista interna
        produto.carrinho = true;
        this.ultimoAdicionado = produto;
        let copiaLista = this.produtos.slice();
        copiaLista.push(produto);
        this.produtos = copiaLista;
        
        //salvar produtos
        this.carrinhoDao.set(this.produtos);

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
        //salvar produtos no banco
        this.carrinhoDao.set(this.produtos);

        this.notifica();
    }

    private notifica(){
        this.subject.next(this.produtos);
    }

}