import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { MainPageComponent } from './main-page/main-page.component';
import { NewSongComponent } from './new-song/new-song.component';
import { SongsListComponent } from './songs-list/songs-list.component';
import { SongDetailsComponent } from './song-details/song-details.component';
import { DashboardComponent } from './dashboard.component';

@NgModule({
    imports: [
        CommonModule,
        HttpModule,
        RouterModule,
        ReactiveFormsModule
    ],
    declarations: [
        HeaderComponent,
        MainPageComponent,
        NewSongComponent,
        SongsListComponent,
        SongDetailsComponent,
        DashboardComponent
    ],
    providers: []
})
export class DashboardModule {
}
