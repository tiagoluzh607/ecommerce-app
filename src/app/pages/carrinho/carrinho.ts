import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Produto } from '../../dominio/produto/produto.model';
import { ProdutoService } from '../../dominio/produto/produto.service';
import { ConferenceData } from '../../providers/conference-data';
import { UserData } from '../../providers/user-data';

@Component({
    selector: 'page-carrinho',
    templateUrl: 'carrinho.html',
    styleUrls: ['carrinho.scss'],
  })
  export class CarrinhoPage {
    
  speakers: any[] = [];
  produtos: Produto[] = [];

  constructor(
    public confData: ConferenceData,
    private produtoService: ProdutoService
    ) {}

  ionViewDidEnter() {
    this.confData.getSpeakers().subscribe((speakers: any[]) => {
      this.speakers = speakers;
    });

    this.produtoService.selectAllAPI().subscribe((produtosApi)=>{
        this.produtos = produtosApi.map(p=>{
          p.carrinho = true;
          return p;
        });
    });
  }

  produtoRemovidoDoCarrinho(produto: Produto){
    console.log('remover produto da lista', produto);
  }
}