import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { MoneyBrModule } from '../pipes/money-br/money-br.module';
import { CardProdutoComponent } from './card-produto.component';

@NgModule({
imports: [
    CommonModule,
    IonicModule,
    MoneyBrModule
],
declarations: [
    CardProdutoComponent
],
exports: [
    CardProdutoComponent
]

})
export class CardProdutoModule { }