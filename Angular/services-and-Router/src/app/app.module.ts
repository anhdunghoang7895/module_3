import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TimelinesComponent } from './timelines/timelines.component';
import { YoutubePlaylistComponent } from './youtube-playlist/youtube-playlist.component';
import { YoutubePlayerComponent } from './youtube-player/youtube-player.component';
import { DictionaryComponent } from './dictionary/dictionary.component';
import { DictionaryDetailComponent } from './dictionary-detail/dictionary-detail.component';
import { DictionaryPageComponent } from './dictionary-page/dictionary-page.component';
import { DictionaryService } from './dictionary.service';
import { YoutubeService } from './youtube.service';


@NgModule({
  declarations: [
    AppComponent,
    TimelinesComponent,
    YoutubePlaylistComponent,
    YoutubePlayerComponent,
    DictionaryComponent,
    DictionaryDetailComponent,
    DictionaryPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DictionaryService,
    YoutubeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
