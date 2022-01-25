import { Component, OnInit } from '@angular/core';
import { EcommerceDadosService } from '../../providers/ecommerce-dados.service';

@Component({
    selector: 'page-endereco',
    templateUrl: 'endereco.html',
    styleUrls: ['endereco.scss'],
  })
  export class EnderecoPage implements OnInit {

    endereco: string = '';
    telefone: string = '';

    constructor(
      private ecommerceDadosService: EcommerceDadosService
    ){}

    ngOnInit(){
      this.endereco = this.ecommerceDadosService.getEndereco();
      this.telefone = this.ecommerceDadosService.getTelefone();
    }

    verMapa(){
      let url = `https://www.google.com/maps/search/?api=1&query=${this.endereco}`;
      this.abrirUrl(url);
    }

    ligar(){
    // let url = 'tel:'+this.telefone
     let url = `tel:${this.telefone}`
     this.abrirUrl(url);
    }

    verWhatsapp(){
      let url = `https://api.whatsapp.com/send?phone=${this.telefone}&text=Ola`  
      this.abrirUrl(url);
    }

    private abrirUrl(url: string){
      window.open(url, '_blank').focus();
    }

  }