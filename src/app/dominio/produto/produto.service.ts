import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Produto } from './produto.model';

@Injectable({
    providedIn: 'root'
})
export class ProdutoService{

    API = environment.urlApi;
    endpoint = 'produtos';
    
    constructor(
        private http: HttpClient
    ){}

    produtos: Produto[] = [];

    selectAll(): Produto[]{
        return this.produtos;
    }

    selectAllAPI(): Observable<Produto[]>{
        return this.http.get<Produto[]>(`${this.API}/${this.endpoint}`);
    }

    selectId(id: number): Produto {
        return this.produtos.find(e=>e.id==id);
    }

    selectIdAPI(id: number): Observable<Produto>{
        return this.http.get<Produto>(`${this.API}/${this.endpoint}/${id}`);
    }

}