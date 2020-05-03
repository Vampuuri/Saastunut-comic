import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../../data.service';
import { Page } from '../../data-interfaces/page';

@Component({
  selector: 'app-comic-page',
  templateUrl: './comic-page.component.html',
  styleUrls: ['./comic-page.component.css']
})
export class ComicPageComponent implements OnInit {
  pageNumber: number;

  constructor(private activatedRoute: ActivatedRoute, private dataService: DataService) { }

  setPage(page: Page) {
    console.log(page);
  }

  setPageNumber(newNumberString: string) {
    if (newNumberString.match(/^[0-9]+$/) != null) {
      this.pageNumber = parseInt(newNumberString);
      this.dataService.getPageById(this.pageNumber, (res) => {this.setPage(res)}, () => {});
    } else {
      this.pageNumber = NaN;
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {this.setPageNumber(params['pagenumber'])});
  }

}
