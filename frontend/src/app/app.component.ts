import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <app-home-page></app-home-page>
  `,
  styleUrls: ['app.component.css']
})

export class AppComponent {
  title = '';

  constructor() {
  }
}
