import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from './produto.model';

@Injectable({
    providedIn: 'root'
})
export class ProdutoService{
    
    constructor(
        private http: HttpClient
    ){}

    produtos: Produto[] = [
        {id: 1, imagem: 'https://drive.google.com/uc?id=192AMq6kOHvD0wOT7Zls2dwQsi1ZI_CBX', nome: 'Capacete Espacial', avaliacao: 5, descricao: 'Além de cobrir a cabeça de um astronauta, o capacete tem uma almofada que direciona o oxigênio para a parte superior do tronco e para a frente do capacete. O capacete mantém o oxigênio à pressão adequada ao redor da cabeça. ... Uma câmera de TV e luzes são anexadas ao capacete.', preco: 289.33},
        {id: 2, imagem: 'https://drive.google.com/uc?id=1R9kLIoWqNzsWJtGIoasy9mdHWnu9tdyF', nome: 'Botas Espaciais', avaliacao: 4.6, descricao: 'Sua principal função é manter os pés do trabalhador protegidos de qualquer perigo externo, como objetos cortantes, pregos, chão escorregadio, objetos caindo, entre outros.', preco: 49.90},
        {id: 3, imagem: 'https://drive.google.com/uc?id=1DiwMfwpkxSMfTeq0lgtBICwdShBgXp81', nome: 'Bandeira do Brasil', avaliacao: 3, descricao: 'Conjunto de mastro de alumínio com suporte para parede em alumínio, extremamente resistente ao tempo, com uma bandeira do Brasil dupla face 68x97cm.', preco: 380},
        {id: 4, imagem: 'https://drive.google.com/uc?id=1c45S6qp3nkmF9TtZQFiA_PTdOxbLhGH-', nome: 'Barra de Cereal Morango', avaliacao: 3, descricao: 'Uma barra de cereal é uma barra suplementar que contêm cereais e outros alimentos de alto valor energético, destinadas a pessoas que precisam de energia rápida, mas não têm tempo para uma refeição. ', preco: 5.25},
        {id: 5, imagem: 'https://drive.google.com/uc?id=1tVQ8EV5XJW4TMiBjjiz070Ntv0pfVJ1E', nome: 'Barra de Cereal Granola e Chocolate', avaliacao: 4, descricao: 'Uma barra de cereal é uma barra suplementar que contêm cereais e outros alimentos de alto valor energético, destinadas a pessoas que precisam de energia rápida, mas não têm tempo para uma refeição. ', preco: 4.89},
        {id: 6, imagem: 'https://drive.google.com/uc?id=198Tl_hui_ePss6PAPdcSZxEFO_8dM_iM', nome: '6 Barras de Cereais Diversas', avaliacao: 5, descricao: 'Uma barra de cereal é uma barra suplementar que contêm cereais e outros alimentos de alto valor energético, destinadas a pessoas que precisam de energia rápida, mas não têm tempo para uma refeição. ', preco: 24.90},
        {id: 7, imagem: 'https://drive.google.com/uc?id=1LgTW5YiSGWq0J6G-PzJwkJgcrgNoDwN9', nome: 'Uva Passa', avaliacao: 2, descricao: 'Quais os benefícios da uva passa? Além de saborosa, a uva passa proporciona energia e tem alto teor de vitaminas e minerais. ...', preco: 17.03},
        {id: 8, imagem: 'https://drive.google.com/uc?id=17CVHtcSSx-6ohavlqkjoE42o5K0Nk8mb', nome: 'Frutas Cristalizadas', avaliacao: 1, descricao: 'Fruta cristalizada, fruta confeitada ou fruta glaceada é um doce em que parte da água de frutos carnudos é substituída por açúcar: posteriormente, o fruto é coberto por xarope de açúcar quente, dando-lhe uma aparência cristalina.', preco: 39.53},
        {id: 9, imagem: 'https://drive.google.com/uc?id=1OCOlIaehguHAUoGtbHpp7EF7x9ntKhgt', nome: 'Banana', avaliacao: 4.3, descricao: 'A banana é uma fruta que é a cara do Brasil, concorda? ... Entre seus nutrientes estão as fibras, potássio, magnésio, fósforo, cálcio, vitamina A, vitaminas do complexo B, vitamina C, além de antioxidantes, triptofano e carboidratos.', preco: 4.20},
        {id: 10, imagem: 'https://drive.google.com/uc?id=13BA4v-B5ptmNqPSJoudsD1kLroO5l0ED', nome: 'Maça', avaliacao: 4.7, descricao: 'As maçãs contêm poderosos nutrientes que estimulam o sistema imunológico. Possuem fibras que ajudam a transportar resíduos para fora do corpo. Além disso, a fruta é fonte de vitamina C que contribui para que o organismo desenvolva resistência.', preco: 8.99},
        {id: 11, imagem: 'https://drive.google.com/uc?id=1dL_dqlGBL_jEFEeNs6I5VwdLgtkiEK1J', nome: 'Melancia', avaliacao: 3, descricao: 'A melancia é um alimento que ajuda a manter o corpo hidratado, pois é composta por cerca de 90% de água.', preco: 2.99},
        {id: 12, imagem: 'https://drive.google.com/uc?id=1OjXIOexBltZ7iWQkA-m1WXNNnKF5ysAo', nome: 'Pera', avaliacao: 5, descricao: 'É uma fruta que fornece nutrientes importantes para a saúde como vitamina A, E, C, fibras, potássio, magnésio e cálcio.', preco: 5},
        {id: 13, imagem: 'https://drive.google.com/uc?id=1D5mU8iwAEruSjxOQgZKDP03ylae5e2py', nome: 'Uva Verde', avaliacao: 5, descricao: 'Controlar a glicemia, pois contém menos açúcar que as uvas roxas e é rica em vitamina B1, importante para o processamento de carboidratos no organismo; Manter a saúde dos ossos, por ser rica em vitamina K e B1, importantes para aumentar a fixação de cálcio na massa óssea.', preco: 7}, 
    ]

    selectAll(): Produto[]{
        return this.produtos;
    }

    selectAllAPI(): Observable<Produto[]>{
        return this.http.get<Produto[]>('http://localhost:3000/produtos');
    }

    selectId(id: number): Produto {
        return this.produtos.find(e=>e.id==id);
    }

}