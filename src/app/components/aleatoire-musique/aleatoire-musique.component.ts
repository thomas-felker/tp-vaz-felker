import { Component } from '@angular/core';
import {Music} from "../../model/music";
import {MusiqueService} from "../../services/musique/musique.service";
import {CarteComponent} from "../carte/carte.component";

@Component({
  selector: 'aleatoire-musique',
  standalone: true,
  imports: [
    CarteComponent
  ],
  templateUrl: './aleatoire-musique.component.html',
  styleUrl: './aleatoire-musique.component.css'
})

export class AleatoireMusiqueComponent {
  music: Music | undefined;

  constructor(private readonly musicService: MusiqueService) {
  }

  NgOnInit(): void {
    this.musicService.fetchRandom().subscribe((music: Music) => {
      alert(music.title);
      this.music = music;
    });
  }
}
