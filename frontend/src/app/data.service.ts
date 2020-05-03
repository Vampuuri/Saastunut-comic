import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from './data-interfaces/character';
import { Page } from './data-interfaces/page';
import { Turn } from './data-interfaces/turn';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getPages(onSuccess: (res: any) => any, onError: (res: any) => any): void {
    this.http.get<Page[]>('http://localhost:3000/pages').subscribe(res => {onSuccess(res)});
  }

  getPageById(id: number, onSuccess: (res: any) => any, onError: (res: any) => any): void {
    this.http.get<Page>('http://localhost:3000/pages/'+id).subscribe(res => {onSuccess(res)});
  }

  getMainCharacters(onSuccess: (res: any) => any, onError: (res: any) => any): void {
    this.http.get<Character[]>('http://localhost:3000/characters/main').subscribe(res => {
      onSuccess(res);
    });
  }

  getSideCharacters(onSuccess: (res: any) => any, onError: (res: any) => any): void {
    this.http.get<Character[]>('http://localhost:3000/characters/side').subscribe(res => {
      onSuccess(res);
    });
  }

  getActiveTurn(onSuccess: (res: any) => any, onError: (res: any) => any): void {
    this.http.get<Turn>('http://localhost:3000/turns/active').subscribe(res => {
      onSuccess(res);
    });
  }
}
