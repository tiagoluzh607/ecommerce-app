import { Component, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
    selector: 'avaliacao-app',
    templateUrl: 'avaliacao.component.html',
    styleUrls: ['avaliacao.component.scss'],
})
export class AvaliacaoComponent implements OnInit, OnChanges {

    @Input() avaliacao: number;

    avaliacoes: boolean[] = [true,true,false,false,false]

    ngOnInit(){
        this.preencheAvaliacoes(this.avaliacao);
    }

    ngOnChanges(changes: SimpleChanges){
        if(changes.avaliacao) {
            let valorAtualizado = changes.avaliacao.currentValue
            this.preencheAvaliacoes(valorAtualizado);
        }
    }

    preencheAvaliacoes(avaliacao: number){
        // avaliacao 3 = [true,true,true,false,false]
        //avaliacao 4 = [true,true,true,true,false]
        this.avaliacoes = this.avaliacoes.map((a,i)=> i+1 <= avaliacao);
    }
}