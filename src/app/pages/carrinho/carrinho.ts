import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { filter } from 'rxjs/operators';
import { CarrinhoEmissor } from '../../dominio/carrinho/carrinho-emissor';
import { Produto } from '../../dominio/produto/produto.model';
import { ProdutoService } from '../../dominio/produto/produto.service';
import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';

@Component({
    selector: 'page-carrinho',
    templateUrl: 'carrinho.html',
    styleUrls: ['carrinho.scss'],
  })
  export class CarrinhoPage implements OnInit {
    
  speakers: any[] = [];
  produtos: Produto[] = [];

  constructor(
    public confData: ConferenceData,
    private produtoService: ProdutoService,
    private carrinhoEmissor: CarrinhoEmissor
    ) {}

  ngOnInit(): void {
    this.carrinhoEmissor.get().pipe(
      filter(produtos=>!!produtos)
    )
    .subscribe(produtos=>{
      this.produtos = produtos
    });
  }

  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });

  }

  produtoRemovidoDoCarrinho(produto: Produto){
    console.log('remover produto da lista', produto);
  }
}