import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontpageComponent } from './main/frontpage/frontpage.component';
import { InfoComponent } from './main/info/info.component';
import { CharactersComponent } from './main/characters/characters.component';
import {HomePageComponent} from './main/home-page/home-page.component';
import { ReadComicComponent } from './comic/read-comic/read-comic.component';

const appRoutes: Routes = [
    {path: '', component: HomePageComponent, children: [
        {path: '', component: FrontpageComponent},
        {path: 'characters', component: CharactersComponent},
        {path: 'info', component: InfoComponent}
    ]},
    {path: 'comic', component: ReadComicComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class HomepageRoutingModule {};