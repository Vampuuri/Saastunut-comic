import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

import { Turn } from '../../data-interfaces/turn';

@Component({
  selector: 'app-active-turn',
  templateUrl: './active-turn.component.html',
  styleUrls: ['./active-turn.component.css']
})
export class ActiveTurnComponent implements OnInit {
  turn: Turn = {id: 0,
    username: '',
    date: null,
    done: false,
    active: false,
    skipped: false
  }

  updateTurn(newTurnArray: Turn[]) {
    console.log(newTurnArray)
    this.turn = newTurnArray[0];
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getActiveTurn((res) => {this.updateTurn(res)}, () => {});
  }

}
