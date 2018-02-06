import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { Song } from '../models/song';
import { environment } from '../../../environments/environment';

@Injectable()
export class HttpService {

    constructor(private http: Http) {
    }

    getSongs(): Observable<Song[]> {
        return this.http.get(environment.API + '/songs').map(res => res.json());
    }

    findSongById(id): Observable<Song> {
        return this.http.get(environment.API + `/songs/${id}`).map(res => res.json());
    }

    saveSong(obj: Song): Observable<Response> {
        return this.http.post(environment.API + '/songs', obj);
    }

}
