import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Song } from '../models/song';

@Injectable()
export class HttpService {

    private API = 'http://localhost:8080/';

    constructor(private http: Http) {
    }
    
    getSongs(): Observable<Song[]> {
        const url = `${this.API}songs/json`;
        return this.http.get(url)
                   .map(res => res.json());
    }

    findSongById(id): Observable<Song> {
        const url = `${this.API}songs/${id}`;
        return this.http.get(url)
                   .map(res => res.json());
    }

    saveSong(obj: {}): Observable<Response> {
        const url = `${this.API}songs`;
        return this.http.post(url, obj);
    }

}
