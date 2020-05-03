import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FrontpageComponent } from './main/frontpage/frontpage.component';
import { InfoComponent } from './main/info/info.component';
import { CharactersComponent } from './main/characters/characters.component';

import { HomepageRoutingModule } from './homepage-routing.module';
import { DataService } from './data.service';
import { ActiveTurnComponent } from './main/active-turn/active-turn.component';
import { HomePageComponent } from './main/home-page/home-page.component';
import { ComicPageComponent } from './comic-page/comic-page.component';
import { ReadComicComponent } from './read-comic/read-comic.component';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    InfoComponent,
    CharactersComponent,
    ActiveTurnComponent,
    HomePageComponent,
    ComicPageComponent,
    ReadComicComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HomepageRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
