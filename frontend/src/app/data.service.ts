import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from './data-interfaces/character';
import { Page } from './data-interfaces/page';
import { Turn } from './data-interfaces/turn';
import { Artist } from './data-interfaces/artist';
import { Round } from './data-interfaces/round';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getArtists(onSuccess: (res: any) => any, onError: (res: any) => any): void {
    this.http.get<Artist[]>('http://localhost:3000/artists').subscribe(res => {onSuccess(res)}, err => onError(err));
  }

  getRounds(onSuccess: (res: any) => any, onError: (res: any) => any): void {
    this.http.get<Round[]>('http://localhost:3000/rounds').subscribe(res => {onSuccess(res)}, err => onError(err));
  }

  getPages(onSuccess: (res: any) => any, onError: (res: any) => any): void {
    this.http.get<Page[]>('http://localhost:3000/pages').subscribe(res => {onSuccess(res)});
  }

  getPageById(id: number, onSuccess: (res: any) => any, onError: () => any): void {
    this.http.get<Page[]>('http://localhost:3000/pages/'+id).subscribe(res => {onSuccess(res)}, () => onError());
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
    this.http.get<Turn[]>('http://localhost:3000/turns/active').subscribe(res => {
      onSuccess(res);
    });
  }
}
