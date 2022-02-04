import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LojaPage } from './loja';

const routes: Routes = [
    {
      path: '',
      component: LojaPage
    }
];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LojaPageRoutingModule { }