import 'rxjs/add/operator/map';
import { Http, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { environment } from '../../environments/environment';
import { Injectable } from '@angular/core';
import { Rating } from './rating.model';

@Injectable()
export class RatingService{
    constructor(private http: Http){}
    

    reviews(rating: Rating):Observable<Rating>{
        return this.http.get(`${environment.baseURL}/reviews`)
                        .map(res => res.json())
                        .map(rating => rating)
    }
}