import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'avaliacao-app',
    templateUrl: 'avaliacao.component.html',
    styleUrls: ['avaliacao.component.scss'],
})
export class AvaliacaoComponent implements OnInit {

    @Input() avaliacao: number;

    avaliacoes: boolean[] = [true,true,false,false,false]

    ngOnInit(){
        this.preencheAvaliacoes(this.avaliacao);
    }

    preencheAvaliacoes(avaliacao: number){
        // avaliacao 3 = [true,true,true,false,false]
        //avaliacao 4 = [true,true,true,true,false]
        this.avaliacoes = this.avaliacoes.map((a,i)=> i+1 <= avaliacao);
    }
}