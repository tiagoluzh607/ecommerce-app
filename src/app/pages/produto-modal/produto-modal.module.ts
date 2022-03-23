import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ProdutoModalPage } from './produto-modal';
import { ProdutoModalPageRoutingModule } from './produto-modal.routing';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      ProdutoModalPageRoutingModule
    ],
    declarations: [
      ProdutoModalPage
    ],
    entryComponents: [
      ProdutoModalPage
    ]
  })
  export class ProdutoModalModule { }