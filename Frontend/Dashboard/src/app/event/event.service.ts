import 'rxjs/add/operator/map';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { MyEvent } from './event.model';
import { environment } from 'environments/environment';

@Injectable()
export class MyEventService{
    constructor(private http: Http){}

    postProduct(myEvent: MyEvent): Observable<string>{
        const headers = new Headers()
        headers.append('Content-Type','application/json')
        return this.http.post(`${environment.baseURL}/event`,
                              JSON.stringify(myEvent),
                              new RequestOptions({headers: headers}))
                        .map(res=>res.json())
                        .map(myEvent => myEvent.id)
    }

    qtdEvents(myEvent: MyEvent):Observable<MyEvent>{
        return this.http.get(`${environment.baseURL}/event`)
                        .map(res => res.json())
                        .map(myEvent => myEvent)
    }
}