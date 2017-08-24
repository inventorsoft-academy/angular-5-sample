import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { HttpService } from '../../common/services/http.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    templateUrl: './new-song.component.html'
})
export class NewSongComponent implements OnInit, OnDestroy {

    newSongForm = this.fb.group({
        author: ['', Validators.required],
        trackName: ['', Validators.required],
        genres: [[''], Validators.required]
    });

    subscriptions: Subscription[] = [];

    constructor(private fb: FormBuilder,
                private httpService: HttpService) {
    }

    ngOnInit() {
    }

    saveSong() {
        let tempGenres = this.newSongForm.value.genres;
        this.newSongForm.value.genres =
            tempGenres.match(/,/g)
                ? tempGenres.split(',')
                : [tempGenres];
        let saveSongSubs = this.httpService.saveSong(this.newSongForm.value).subscribe();
        this.subscriptions.push(saveSongSubs);
        this.clearForm();
    }

    clearForm() {
        this.newSongForm.reset();
    }

    ngOnDestroy(): void {
        this.subscriptions.forEach(
            subscription => {
                subscription.unsubscribe();
            }
        )
    }
}
