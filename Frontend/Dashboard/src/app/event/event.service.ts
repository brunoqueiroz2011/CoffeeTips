import 'rxjs/add/operator/map';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MEAT_API } from 'app/app.api';
import { Injectable } from '@angular/core';
import { MyEvent } from './event.model';

@Injectable()
export class MyEventService{
    constructor(private http: Http){}

    postProduct(myEvent: MyEvent): Observable<string>{
        const headers = new Headers()
        headers.append('Content-Type','application/json')
        return this.http.post(`${MEAT_API}/events`,
                              JSON.stringify(myEvent),
                              new RequestOptions({headers: headers}))
                        .map(res=>res.json())
                        .map(myEvent => myEvent.id)
    }

    qtdEvents(myEvent: MyEvent):Observable<MyEvent>{
        return this.http.get(`${MEAT_API}/events`)
                        .map(res => res.json())
                        .map(myEvent => myEvent)
    }
}