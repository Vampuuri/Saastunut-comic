import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Page } from './data-interfaces/page';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient) { }

  postNewPage(page: Page, artistId: number, onSuccess: (page: Page) => any, onError: () => any) {
    this.http.post<Page>('http://localhost:3000/pages', {artistId: artistId, content: page.content, date: page.date})
      .subscribe(res => {onSuccess(res)}, () => onError());
  }

  updatePage(page: Page, artistId: number, onSuccess: () => any, onError: () => any) {
    this.http.put(`http://localhost:3000/pages/${page.id}`, {artistId: artistId, content: page.content, date: page.date})
      .subscribe(() => onSuccess(), () => onError())
  }

}
