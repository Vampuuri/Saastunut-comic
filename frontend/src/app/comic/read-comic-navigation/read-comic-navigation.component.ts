import { Component, OnInit } from '@angular/core';

import { DataService } from '../../data.service';
import { Page } from '../../data-interfaces/page';

@Component({
  selector: 'app-read-comic-navigation',
  templateUrl: './read-comic-navigation.component.html',
  styleUrls: ['./read-comic-navigation.component.css']
})
export class ReadComicNavigationComponent implements OnInit {
  pages: Page[] = []

  updatePages(newPages: Page[]) {
    this.pages = newPages;
  }

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getPages((res) => {this.updatePages(res)}, () => {});
  }

}
