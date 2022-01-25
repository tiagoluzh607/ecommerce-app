import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class EcommerceDadosService{

    endereco = 'R. Guia Lopes, 4201 - Canudos, Novo Hamburgo'
    telefone = '5551988888888'

    getEndereco(){
        return this.endereco;
    }

    getTelefone(){
        return this.telefone;
    }
}