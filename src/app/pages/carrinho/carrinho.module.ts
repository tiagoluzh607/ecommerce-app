import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CardProdutoModule } from '../../components/card-produto/card-produto.module';
import { CarrinhoPage } from './carrinho';
import { CarrinhoPageRoutingModule } from './carrinho.routing';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      CarrinhoPageRoutingModule,
      CardProdutoModule
    ],
    declarations: [
      CarrinhoPage
    ],
    entryComponents: [
      CarrinhoPage
    ]
  })
  export class CarrinhoModule { }