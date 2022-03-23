import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../dominio/produto/produto.model';
import { ProdutoService } from '../../dominio/produto/produto.service';
import { EcommerceDadosService } from '../../providers/ecommerce-dados.service';

@Component({
    selector: 'page-produto-modal',
    templateUrl: 'produto-modal.html',
    styleUrls: ['produto-modal.scss'],
  })
  export class ProdutoModalPage implements OnInit {

    produto: Produto;

    constructor(
      private activatedRoute: ActivatedRoute,
      private produtoService: ProdutoService
    ){}

    ngOnInit(){
      let idProdutoString = this.activatedRoute.snapshot.paramMap.get('idProduto');
      console.log('vou buscar o produto com o id', idProdutoString);
      let idProduto = parseInt(idProdutoString);
      let produto = this.produtoService.selectId(idProduto);
      console.log('busquei o produto', produto);
      this.produto = produto;
    }
  
  }