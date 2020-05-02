import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>Hello</h1>
    <ul>
      <li><a routerLink="/">Home</a></li>
      <li><a routerLink="/info">Info</a></li>
      <li><a routerLink="/characters">Characters</a></li>
    </ul>
    <div>
      <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  title = '';
}
