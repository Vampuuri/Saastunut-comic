import { Component, OnInit } from '@angular/core';

import { DataService } from '../../data.service';
import { Round } from '../../data-interfaces/round';
import { Page } from 'src/app/data-interfaces/page';

@Component({
  selector: 'app-read-comic-navigation',
  templateUrl: './read-comic-navigation.component.html',
  styleUrls: ['./read-comic-navigation.component.css']
})
export class ReadComicNavigationComponent implements OnInit {
  rounds: Round[] = [];
  pages: Page[] = [];

  updateRounds(newRounds: Round[]) {
    var updatedRounds = [];
    
    var turnId = -1;
    var roundNumber = -1;
    var helper = [];
    for (let round of newRounds) {
      if (roundNumber !== -1 && roundNumber !== round.number) {
        updatedRounds.push([...helper])
        helper = [];
      }
      helper.push(round);
      turnId = round.turnId;

      roundNumber = round.number;
    }
    updatedRounds.push(helper);

    this.rounds = updatedRounds;
  }

  updatePages(newPages: Page[]) {
    this.pages = newPages;
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getRounds(res => this.updateRounds(res), err => {});
    this.dataService.getPages(res => this.updatePages(res), err => {});
  }

}
