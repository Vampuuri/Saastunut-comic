import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Character } from './data-interfaces/character';
import { Turn } from './data-interfaces/turn';

@Injectable()
export class DataService {

  constructor(private http: HttpClient) { }

  getPages() {
    this.http.get('http://localhost:3000/pages').subscribe(res => {console.log(res)});
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
