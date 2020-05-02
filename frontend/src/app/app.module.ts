import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FrontpageComponent } from './frontpage/frontpage.component';
import { InfoComponent } from './info/info.component';
import { CharactersComponent } from './characters/characters.component';

import { HomepageRoutingModule } from './homepage-routing.module';
import { DataService } from './data.service';

@NgModule({
  declarations: [
    AppComponent,
    FrontpageComponent,
    InfoComponent,
    CharactersComponent
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
