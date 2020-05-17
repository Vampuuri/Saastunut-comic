import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { DataService } from '../../data.service';
import { Page } from '../../data-interfaces/page';

@Component({
  selector: 'app-comic-page',
  templateUrl: './comic-page.component.html',
  styleUrls: ['./comic-page.component.css']
})
export class ComicPageComponent implements OnInit {
  pageNumber: number;
  loading: boolean = true;
  lastPage: boolean = false;
  page = {content: '', id: 0, username: '', date: new Date()}

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private dataService: DataService) { }

  setPage(pageArray: Page[]) {
    this.page = pageArray[0];
    this.lastPage = false;
    this.loading = false;
  }

  onLastPage() {
    this.lastPage = true;
  }

  previousPage() {
    if (this.lastPage) {
      this.lastPage = false;
      this.router.navigateByUrl(`/comic/${this.page.id}`);
    } else {
      this.router.navigateByUrl(`/comic/${this.page.id - 1}`);
    }
  }

  nextPage() {
    this.router.navigateByUrl(`/comic/${this.page.id + 1}`);
  }

  setPageNumber(newNumberString: string) {
    if (newNumberString.match(/^[0-9]+$/) != null) {
      this.loading = true;
      this.pageNumber = parseInt(newNumberString);
      this.dataService.getPageById(this.pageNumber, (res) => {this.setPage(res)}, () => {this.onLastPage()});
    } else {
      this.pageNumber = NaN;
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {this.setPageNumber(params['pagenumber'])});
  }

}
