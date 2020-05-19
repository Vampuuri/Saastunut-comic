import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { DataService } from '../data.service';
import { Artist } from '../data-interfaces/artist';
import { Turn } from '../data-interfaces/turn';
import { Page } from '../data-interfaces/page';
import { Round } from '../data-interfaces/round';
import { formatDate } from '@angular/common';

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
  
  newPageContent: string = '';
  newPageArtistId: number = 1;
  newPageDate: string = '';

  updatePageId: number = -1;
  updatePageContent: string = '';
  updatePageArtistId: number = 1;
  updatePageDate: string = '';

  constructor(private adminService: AdminService, private dataService: DataService) { }

  changeArtistStatus(artistId: number, status: string) {
    this.adminService.changeArtistStatus(status, artistId,
      () => this.dataService.getArtists(res => this.updateArtists(res), err => this.error(err)),
      (err) => this.error(err));
  }

  editPage(pageId: number, username: string, content: string, date: string) {
    var artistId = 1;

    for (let artist of this.artists) {
      if (artist.username === username) {
        artistId = artist.id;
      }
    }

    var dateObj = new Date(date);

    this.updatePageId = pageId;
    this.updatePageContent = content;
    this.updatePageArtistId = artistId;
    this.updatePageDate = formatDate(dateObj, 'yyyy-MM-dd', 'en_US');
  }

  updatePage() {
    try {
      const page: Page = {id: this.updatePageId, content: this.updatePageContent, username: '', date: new Date(this.updatePageDate)};
      this.adminService.updatePage(
        page,
        this.updatePageArtistId,
        () => this.dataService.getPages(res => this.updatePages(res), err => this.error(err)),
        err => this.error(err)
      );
    } catch (err) {
      this.error(err)
    }

    this.updatePageId = -1;
    this.updatePageContent = '';
    this.updatePageArtistId = 1;
    this.updatePageDate = '';
  }

  addNewPage() {
    if (this.newPageContent !== '' && this.newPageDate !== '') {
      try {
        var date = new Date(this.newPageDate);
        var page: Page = {id: -1, content: this.newPageContent, username: '', date: date};

        this.adminService.postNewPage(page, this.newPageArtistId,
          () => this.dataService.getPages(res => this.updatePages(res), err => this.error(err)),
          err => this.error(err)
          );

      } catch (error) {
        this.error(error);
      }
    } else {
      this.error(new Error("Missing inputs"));
    }

    this.newPageContent = '';
    this.newPageArtistId = 1;
    this.newPageDate = '';
  }

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
    updatedRounds.push(helper);

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
