import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FrontpageComponent } from './main/frontpage/frontpage.component';
import { InfoComponent } from './main/info/info.component';
import { CharactersComponent } from './main/characters/characters.component';
import { ActiveTurnComponent } from './main/active-turn/active-turn.component';
import { HomePageComponent } from './main/home-page/home-page.component';
import { ComicPageComponent } from './comic/comic-page/comic-page.component';
import { ReadComicComponent } from './comic/read-comic/read-comic.component';

import { HomepageRoutingModule } from './homepage-routing.module';
import { MainRoutingModule } from './main/main-routing.module';
import { DataService } from './data.service';

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
    HomepageRoutingModule,
    MainRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
