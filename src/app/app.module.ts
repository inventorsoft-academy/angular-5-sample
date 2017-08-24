import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MainPageComponent } from './dashboard/main-page/main-page.component';
import { SongsListComponent } from './dashboard/songs-list/songs-list.component';
import { SongDetailsComponent } from './dashboard/song-details/song-details.component';
import { NewSongComponent } from './dashboard/new-song/new-song.component';
import { HttpService } from './common/services/http.service';

const routes = [
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: [
            {
                path: '',
                redirectTo: 'main-page',
                pathMatch: 'full'
            },
            {
                path: 'main-page',
                component: MainPageComponent
            },
            {
                path: 'songs-list',
                component: SongsListComponent
            },
            {
                path: 'song-details/:id',
                component: SongDetailsComponent
            },
            {
                path: 'new-song',
                component: NewSongComponent
            }
        ]
    },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    }

];

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        DashboardModule,
        RouterModule.forRoot(routes)
    ],
    providers: [HttpService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
