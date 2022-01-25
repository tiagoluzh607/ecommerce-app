import { Component } from '@angular/core';

@Component({
    selector: 'page-endereco',
    templateUrl: 'endereco.html',
    styleUrls: ['endereco.scss'],
  })
  export class EnderecoPage {

    endereco: string = 'R. Guia Lopes, 4201 - Canudos, Novo Hamburgo';

    verMapa(){
      let url = 'https://www.google.com/maps/search/?api=1&query='+this.endereco;
      this.abrirUrl(url);
    }

    ligar(){
     let url = 'tel:5551988888888'
     this.abrirUrl(url);
    }

    verWhatsapp(){
      let url = 'https://api.whatsapp.com/send?phone=5551988888888&text=Ola'  
      this.abrirUrl(url);
    }

    private abrirUrl(url: string){
      window.open(url, '_blank').focus();
    }

  }