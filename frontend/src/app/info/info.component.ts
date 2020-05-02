import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: 'info.component.html',
  styles: ['']
})
export class InfoComponent implements OnInit {
  rulesVisible: boolean = false;

  constructor() { }

  toggleRules() {
    this.rulesVisible = !this.rulesVisible;
  }

  ngOnInit(): void {
    console.log("info")
  }

}
