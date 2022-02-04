import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LojaPage } from './loja';
import { LojaPageRoutingModule } from './loja.routing';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      LojaPageRoutingModule
    ],
    declarations: [
      LojaPage
    ],
    entryComponents: [
      LojaPage
    ]
  })
  export class LojaModule { }