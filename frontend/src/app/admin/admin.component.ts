import { Component, OnInit } from '@angular/core';
import { AdminService } from '../admin.service';
import { DataService } from '../data.service';
import { Artist } from '../data-interfaces/artist';
import { Turn } from '../data-interfaces/turn';
import { Page } from '../data-interfaces/page';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  pages: Page[] = [];
  artist: Artist[] = [];
  turns: Turn[] = [];

  constructor(private adminService: AdminService, private dataService: DataService) { }

  updatePages(newPages: Page[]) {
    this.pages = newPages;
  }

  error(error: Error) {
    alert("Tapahtui virhe: " + error.message);
  }

  ngOnInit(): void {
    this.dataService.getPages(res => this.updatePages(res), err => this.error(err));
  }

}
