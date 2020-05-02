import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

import { Character } from '../data-interfaces/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styles: ['']
})
export class CharactersComponent implements OnInit {
  mainCharacters: Character[] = [];
  sideCharacters: Character[] = [];

  constructor(private dataService: DataService) {}

  updateMainCharacters(newCharacters: Character[]) {
    this.mainCharacters = newCharacters;
  }

  updateSideCharacters(newCharacters: Character[]) {
    this.sideCharacters = newCharacters;
  }

  ngOnInit(): void {
    this.dataService.getMainCharacters( (response) => { this.updateMainCharacters(response) }, () => {} );
    this.dataService.getSideCharacters( (response) => { this.updateSideCharacters(response) }, () => {} );
  }

}
