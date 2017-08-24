import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../common/services/http.service';
import { Song } from '../../common/models/song';
import { Subscription } from 'rxjs/Subscription';

@Component({
    templateUrl: './song-details.component.html'
})
export class SongDetailsComponent implements OnInit, OnDestroy {

    song: Song;

    subscriptions: Subscription[] = [];

    constructor(private route: ActivatedRoute,
                private httpService: HttpService) {
    }

    ngOnInit() {
        this.findSongById(this.route.snapshot.params.id);
    }

    findSongById(id) {
        let findSongSubs = this.httpService.findSongById(id)
            .subscribe(
                res => {
                    this.song = res;
                }
            );
        this.subscriptions.push(findSongSubs);
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(
            subscription => {
                subscription.unsubscribe();
            }
        )
    }
}
