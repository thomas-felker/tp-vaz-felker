import { Component } from '@angular/core';
import {
  MatCard,
  MatCardActions,
  MatCardContent,
  MatCardHeader,
  MatCardImage,
  MatCardSubtitle, MatCardTitle
} from "@angular/material/card";
import {MatChip, MatChipListbox} from "@angular/material/chips";
import {MusiqueService} from "../services/musique/musique.service";
import {Music} from "../model/music";
import {NgFor} from "@angular/common";

@Component({
  selector: 'app-liste-musiques',
  standalone: true,
  imports: [
    MatCardActions,
    MatCard,
    MatCardHeader,
    MatCardContent,
    MatChipListbox,
    MatCardSubtitle,
    MatCardTitle,
    MatChip,
    MatCardImage,
    NgFor
  ],
  templateUrl: './liste-musiques.component.html',
  styleUrl: './liste-musiques.component.css'
})
export class ListeMusiquesComponent {

  musics: Array<Music> = [];

  view = 'card';

  constructor(private readonly musicService: MusiqueService) {
  }

  ngOnInit(): void {
    this.musicService.fetchAll().subscribe((musics: Array<Music>) => {
      this.musics = musics;
    });
  }


  add(){

  }

  switchView() {
    this.view = this.view === 'card' ? 'list' : 'card';
  }

}
