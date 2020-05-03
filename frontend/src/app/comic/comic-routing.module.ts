import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReadComicComponent } from './read-comic/read-comic.component';
import { ComicPageComponent } from './comic-page/comic-page.component';

const comicRoutes: Routes = [
    {path: 'comic', component: ReadComicComponent},
    {path: 'comic/:pagenumber', component: ComicPageComponent}
];

@NgModule({
    imports: [
        RouterModule.forChild(comicRoutes)
    ],
    exports: [
        RouterModule
    ]
})

export class ComicRoutingModule {};