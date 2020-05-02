import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { InfoComponent } from './info/info.component';
import { CharactersComponent } from './characters/characters.component';

import { HomepageRoutingModule } from './homepage-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    InfoComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    HomepageRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
