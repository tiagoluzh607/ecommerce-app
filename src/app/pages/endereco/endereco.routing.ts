import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EnderecoPage } from './endereco';

const routes: Routes = [
    {
      path: '',
      component: EnderecoPage
    }
];
  
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class EnderecoPageRoutingModule { }