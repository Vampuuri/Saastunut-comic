import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontpageComponent } from './frontpage/frontpage.component';
import { InfoComponent } from './info/info.component';
import { CharactersComponent } from './characters/characters.component';
import {HomePageComponent} from './home-page/home-page.component';

const mainRoutes: Routes = [
    {path: '', component: HomePageComponent, children: [
        {path: 'index', component: FrontpageComponent},
        {path: 'characters', component: CharactersComponent},
        {path: 'info', component: InfoComponent},
        {path: '', redirectTo: 'index', pathMatch: 'full'}
    ]},
];

@NgModule({
    imports: [
        RouterModule.forChild(mainRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class MainRoutingModule {};