import { Injectable } from "@angular/core";
import { Http, RequestOptions, Headers  } from "@angular/http";
import { Profile } from "./profile.model";
import { environment } from '../../environments/environment';
import { Observable } from "rxjs/Observable";
import 'rxjs/add/operator/map';

@Injectable()
export class ProfileService{
    constructor(private http: Http){}

    postProfile(profile: Profile): Observable<string>{
        const headers = new Headers()
        headers.append('Content-Type','application/json')
        return this.http.post(`${environment.baseURL}/user`,
                              JSON.stringify(profile),
                              new RequestOptions({headers: headers}))
                        .map(res=>res.json())
                        .map(profile => profile.id)
    }
}