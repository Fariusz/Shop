import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Artykul } from 'models/artykul';
import {ArtykulyService, Stronnicowanie} from '../artykuly.service';
import { KoszykService } from '../koszyk.service';

@Component({
  selector: 'app-artykuly',
  templateUrl: './artykuly.component.html',
  styleUrls: ['./artykuly.component.css']
})
export class ArtykulyComponent implements OnInit {

  stronnicowanie: Stronnicowanie = {
    strona: 0,
    ilosc: 10
  };

  artykuly: Artykul[] = [];

  constructor(private artykulyService: ArtykulyService, private koszykService: KoszykService) { }

  ngOnInit(): void {this.odswiez(); }

  dodajDoKoszyka(artykul: Artykul) {
    this.koszykService.dodajDoKoszyka(artykul);
  }

  odswiez() {
    this.artykulyService.pobierzArtykuly(this.stronnicowanie).subscribe(artykuly => {this.artykuly = artykuly; });
  }
}
