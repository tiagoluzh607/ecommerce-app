import { Component, OnInit } from '@angular/core';
import { filter } from 'rxjs/operators';
import { CarrinhoEmissor } from '../../dominio/carrinho/carrinho-emissor';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage implements OnInit {

  constructor(
    private carrinhoEmissor: CarrinhoEmissor
  ){}

  totalItensCarrinho = 0;

  ngOnInit(){

    this.carrinhoEmissor.get().pipe(
      filter((produtos)=>!!produtos)
    )
    .subscribe((produtos)=>{
      this.totalItensCarrinho = produtos.length;
    });
  }


}
