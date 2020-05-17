import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { DataService } from '../data.service';
import { Artist } from '../data-interfaces/artist';
import { Turn } from '../data-interfaces/turn';
import { Page } from '../data-interfaces/page';
import { Round } from '../data-interfaces/round';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  pages: Page[] = [];
  artists: Artist[] = [];
  turns: Turn[] = [];
  rounds: Round[][] = [];

  constructor(private adminService: AdminService, private dataService: DataService) { }

  updatePages(newPages: Page[]) {
    this.pages = newPages;
  }

  updateArtists(newArtists: Artist[]) {
    this.artists = newArtists;
  }

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

      if (round.turnId !== turnId) {
        helper.push(round);
        turnId = round.turnId;
      }

      roundNumber = round.number;
    }

    this.rounds = updatedRounds;
  }

  error(error: Error) {
    alert("Tapahtui virhe: " + error.message);
  }

  ngOnInit(): void {
    this.dataService.getPages(res => this.updatePages(res), err => this.error(err));
    this.dataService.getArtists(res => this.updateArtists(res), err => this.error(err));
    this.dataService.getRounds(res => this.updateRounds(res), err => this.error(err));
  }

}
