import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-comic-page',
  templateUrl: './comic-page.component.html',
  styleUrls: ['./comic-page.component.css']
})
export class ComicPageComponent implements OnInit {
  pageNumber: number;

  constructor(private activatedRoute: ActivatedRoute) { }

  setPageNumber(newNumberString: string) {
    if (newNumberString.match(/^[0-9]+$/) != null) {
      this.pageNumber = parseInt(newNumberString);
    } else {
      this.pageNumber = NaN;
    }
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {this.setPageNumber(params['pagenumber'])})
  }

}
