import { Injectable } from "@angular/core";
import { Produto } from "../produto/produto.model";

const KEY = 'carrinho';

@Injectable({
    providedIn: 'root'
})
export class CarrinhoDaoService {

    set(produtos: Produto[]) {
        window.localStorage.setItem(KEY, JSON.stringify(produtos));
    }
    get(): Produto[]{
        let objectString = window.localStorage.getItem(KEY);
        return JSON.parse(objectString) as Produto[];
    }
    remove() {
        window.localStorage.removeItem(KEY);
    }
    has(): boolean {
        return !!this.get();
    }
    
}