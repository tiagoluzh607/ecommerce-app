import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EcommerceDadosService } from '../../providers/ecommerce-dados.service';

@Component({
    selector: 'page-produto-modal',
    templateUrl: 'produto-modal.html',
    styleUrls: ['produto-modal.scss'],
  })
  export class ProdutoModalPage implements OnInit {


    constructor(
      private activatedRoute: ActivatedRoute
    ){}

    ngOnInit(){
      let idProdutoString = this.activatedRoute.snapshot.paramMap.get('idProduto');
      console.log('vou buscar o produto com o id', idProdutoString);
    }
  
  }