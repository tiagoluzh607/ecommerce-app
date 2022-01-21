import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { EnderecoPage } from './endereco';
import { EnderecoPageRoutingModule } from './endereco.routing';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      EnderecoPageRoutingModule
    ],
    declarations: [
      EnderecoPage
    ],
    entryComponents: [
      EnderecoPage
    ]
  })
  export class EnderecoModule { }