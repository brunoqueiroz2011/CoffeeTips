import 'rxjs/add/operator/map';
import { Product } from './product.model';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService{
    constructor(private http: Http){}

    postProduct(product: Product): Observable<string>{
        console.log(product)
        const headers = new Headers()
        headers.append('Content-Type','application/json')
        return this.http.post(`${environment.baseURL}/product`,
                              JSON.stringify(product),
                              new RequestOptions({headers: headers}))
                        .map(res=>res.json())
                        .map(profile => profile.id)
    }

    qtdPruducts(product: Product):Observable<Product>{
        return this.http.get(`${environment.baseURL}/product`)
                        .map(res => res.json())
                        .map(product => product)
    }
}