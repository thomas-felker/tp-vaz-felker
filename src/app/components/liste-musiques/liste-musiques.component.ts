import { Component } from '@angular/core';
import {MusiqueService} from "../../services/musique/musique.service";
import {Music} from "../../model/music";
import {NgFor, NgSwitch, NgSwitchCase} from "@angular/common";
import {CarteComponent} from "../carte/carte.component";

@Component({
  selector: 'liste-musiques',
  standalone: true,
  imports: [
    NgFor,
    CarteComponent,
    NgSwitch,
    NgSwitchCase
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
