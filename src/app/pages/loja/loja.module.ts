import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CardProdutoModule } from '../../components/card-produto/card-produto.module';
import { LojaPage } from './loja';
import { LojaPageRoutingModule } from './loja.routing';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      LojaPageRoutingModule,
      CardProdutoModule
    ],
    declarations: [
      LojaPage
    ],
    entryComponents: [
      LojaPage
    ]
  })
  export class LojaModule { }