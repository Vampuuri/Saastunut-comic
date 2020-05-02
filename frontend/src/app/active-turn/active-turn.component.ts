import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-active-turn',
  templateUrl: './active-turn.component.html',
  styleUrls: ['./active-turn.component.css']
})
export class ActiveTurnComponent implements OnInit {
  turn = {artist: 'Vampuuri', date: '2014.15.16'}

  constructor() { }

  ngOnInit(): void {
  }

}
