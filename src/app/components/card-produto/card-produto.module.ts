import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CardProdutoComponent } from './card-produto.component';

@NgModule({
imports: [
    CommonModule,
    IonicModule
],
declarations: [
    CardProdutoComponent
],
exports: [
    CardProdutoComponent
]

})
export class CardProdutoModule { }