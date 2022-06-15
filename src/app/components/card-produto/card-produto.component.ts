import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { CarrinhoEmissor } from '../../dominio/carrinho/carrinho-emissor';
import { Produto } from '../../dominio/produto/produto.model';


@Component({
    selector: 'card-produto-app',
    templateUrl: 'card-produto.component.html',
    styleUrls: ['card-produto.component.scss'],
})
export class CardProdutoComponent {
    @Input() produto: Produto;
    @Output() clicarNoCarrinho: EventEmitter<Produto> = new EventEmitter();
    @Output() clicarNaLixeira: EventEmitter<Produto> = new EventEmitter();
    
    constructor(
        private router: Router,
        private carrinhoEmissor: CarrinhoEmissor
    ){}
    

    cliqueNoCarrinho(event: Event){
        event.stopPropagation();
        console.log('adicinar no carrinho', this.produto);
        this.carrinhoEmissor.add(this.produto);
        this.clicarNoCarrinho.emit(this.produto);
    }

    cliqueNaLixeira(event: Event){
        event.stopPropagation();
        console.log('tirar do carrinho', this.produto);
        this.carrinhoEmissor.remove(this.produto);
        this.clicarNaLixeira.emit(this.produto);
    }

    cliqueNoCard(){
        console.log('abrir o modal', this.produto);
        this.router.navigate(['app','tabs','produto',this.produto.id]);
    }

    
}