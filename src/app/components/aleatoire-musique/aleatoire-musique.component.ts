import { Component } from '@angular/core';
import {Music} from "../../model/music";
import {MusiqueService} from "../../services/musique/musique.service";

@Component({
  selector: 'app-aleatoire-musique',
  standalone: true,
  imports: [],
  templateUrl: './aleatoire-musique.component.html',
  styleUrl: './aleatoire-musique.component.css'
})

export class AleatoireMusiqueComponent {
  music: Music | undefined;

  constructor(private readonly musicService: MusiqueService) {
  }

  NgOnInit(): void {
    this.musicService.fetchRandom().subscribe((music: Music) => {
      this.music = music;
    });
  }
}
