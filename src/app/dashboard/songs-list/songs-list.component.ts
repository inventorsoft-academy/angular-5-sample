import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpService } from '../../common/services/http.service';
import { Subscription } from 'rxjs/Subscription';
import { Router } from '@angular/router';
import { Song } from '../../common/models/song';

@Component({
    templateUrl: './songs-list.component.html',
    styleUrls: ['./songs-list.component.css']
})
export class SongsListComponent implements OnInit, OnDestroy {

    songsList: Song[];

    subscriptions: Subscription[] = [];

    constructor(private httpService: HttpService,
                private router: Router) {
    }

    ngOnInit() {
        this.getSongs();
    }

    getSongs() {
        let getSongsSubscription = this.httpService.getSongs()
            .subscribe(
                res => {
                    this.songsList = res;
                }
            );
        this.subscriptions.push(getSongsSubscription);
    }

    showSongDetails(id) {
        this.router.navigate([`dashboard/song-details/${id}`]);
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => {
            subscription.unsubscribe();
        })
    }
}
