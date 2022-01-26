import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PerfilPage } from './perfil';
import { PerfilPageRoutingModule } from './perfil.routing';

@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      PerfilPageRoutingModule
    ],
    declarations: [
      PerfilPage
    ],
    entryComponents: [
      PerfilPage
    ]
  })
  export class PerfilModule { }