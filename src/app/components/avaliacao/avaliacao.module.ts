import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AvaliacaoComponent } from './avaliacao.component';

@NgModule({
imports: [
    CommonModule,
    IonicModule
],
declarations: [
    AvaliacaoComponent
],
exports: [
    AvaliacaoComponent
]

})
export class AvaliacaoModule { }