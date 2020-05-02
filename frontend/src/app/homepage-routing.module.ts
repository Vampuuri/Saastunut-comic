import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FrontpageComponent } from './frontpage/frontpage.component';
import { InfoComponent } from './info/info.component';
import { CharactersComponent } from './characters/characters.component';

const appRoutes: Routes = [
    {path: '', component: FrontpageComponent},
    {path: 'info', component: InfoComponent},
    {path: 'characters', component: CharactersComponent}
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