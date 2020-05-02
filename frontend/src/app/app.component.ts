import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello</h1>
    <nav>
      <a routerLink="/">Home</a>
      <a routerLink="/info">Info</a>
      <a routerLink="/characters">Characters</a>
    </nav>
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = '';
}
