import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoModalPage } from './produto-modal';

const routes: Routes = [
    {
      path: '',
      component: ProdutoModalPage
    }
];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ProdutoModalPageRoutingModule { }