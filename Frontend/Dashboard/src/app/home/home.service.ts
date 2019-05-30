import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Product } from "app/product/product.model";
import { Http } from "@angular/http";
import { environment } from '../../environments/environment';

@Injectable()
export class HomeService{
    constructor(private http: Http){}

    qtdPruducts():Observable<string>{
        return this.http.get(`${environment.baseURL}/product`)
                        .map(res => res.json())                        
    }
    
    qtdEvents():Observable<string>{
        return this.http.get(`${environment.baseURL}/event`)
                        .map(res => res.json())                        
    }

    qtdComments():Observable<string>{
        return this.http.get(`${environment.baseURL}/reviews`)
                        .map(res => res.json())                        
    }

}
