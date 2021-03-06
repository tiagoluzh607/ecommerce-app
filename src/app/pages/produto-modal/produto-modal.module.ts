import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AvaliacaoModule } from '../../components/avaliacao/avaliacao.module';
import { MoneyBrModule } from '../../components/pipes/money-br/money-br.module';
import { ProdutoModalPage } from './produto-modal';
import { ProdutoModalPageRoutingModule } from './produto-modal.routing';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      ProdutoModalPageRoutingModule,
      MoneyBrModule,
      AvaliacaoModule
    ],
    declarations: [
      ProdutoModalPage
    ],
    entryComponents: [
      ProdutoModalPage
    ]
  })
  export class ProdutoModalModule { }