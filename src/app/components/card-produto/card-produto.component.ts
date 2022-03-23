import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
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
        private router: Router
    ){}
    
    avaliacoes: boolean[] = [true,true,false,false,false]

    ngOnInit(){
        this.preencheAvaliacoes(this.produto.avaliacao);
    }

    preencheAvaliacoes(avaliacao: number){
        // avaliacao 3 = [true,true,true,false,false]
        //avaliacao 4 = [true,true,true,true,false]
        this.avaliacoes = this.avaliacoes.map((a,i)=> i+1 <= avaliacao);
    }

    cliqueNoCarrinho(event: Event){
        event.stopPropagation();
        console.log('adicinar no carrinho', this.produto);
        this.clicarNoCarrinho.emit(this.produto);
    }

    cliqueNaLixeira(event: Event){
        event.stopPropagation();
        console.log('tirar do carrinho', this.produto);
        this.clicarNaLixeira.emit(this.produto);
    }

    cliqueNoCard(){
        console.log('abrir o modal', this.produto);
        this.router.navigate(['app','tabs','produto']);
    }

    
}