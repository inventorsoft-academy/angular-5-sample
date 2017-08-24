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
        const url = 'songs/json';
        return this.http.get(this.API + url)
                   .map(res => res.json());
    }

    findSongById(id): Observable<Song> {
        const url = 'songs/';
        return this.http.get(this.API + url + id)
                   .map(res => res.json());
    }

    saveSong(obj: {}): Observable<Response> {
        const url = 'songs';
        return this.http.post(this.API + url, obj);
    }

}
