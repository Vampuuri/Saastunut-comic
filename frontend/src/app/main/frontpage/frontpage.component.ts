import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frontpage',
  templateUrl: './frontpage.component.html',
  styles: []
})
export class FrontpageComponent implements OnInit {

  constructor() {
    console.log('frontpage cosntructor')
  }

  ngOnInit(): void {
  }

}
