import { Component } from '@angular/core';
import {Music} from "../../model/music";
import {MusiqueService} from "../../services/musique/musique.service";
import {CarteComponent} from "../carte/carte.component";
import {MatIcon} from "@angular/material/icon";
import {MatFabButton} from "@angular/material/button";

@Component({
  selector: 'aleatoire-musique',
  standalone: true,
  imports: [
    CarteComponent,
    MatIcon,
    MatFabButton
  ],
  templateUrl: './aleatoire-musique.component.html',
  styleUrl: './aleatoire-musique.component.css'
})

export class AleatoireMusiqueComponent {
  music: Music | undefined;

  constructor(private readonly musicService: MusiqueService) {
  }

  ngOnInit(): void {
    this.randomMusic();
  }

  randomMusic() {
    this.musicService.fetchRandom().subscribe((music: Music) => {
      this.music = music;
    });
  }
}
