import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle, MatCardTitle
} from "@angular/material/card";
import {MatChip, MatChipListbox} from "@angular/material/chips";
import { Music } from "../../model/music"
import {NgForOf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'carte',
  standalone: true,
  imports: [
    MatCard,
    MatCardActions,
    MatCardContent,
    MatCardHeader,
    MatCardImage,
    MatCardSubtitle,
    MatCardTitle,
    MatChip,
    NgForOf,
    MatChipListbox,
    MatIcon,
    MatButton
  ],
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css'
})

export class CarteComponent {
    @Input() music: Music | undefined;



  @Output('musicDelete') delete$: EventEmitter<any> = new EventEmitter();

  @Output('musicUpdate') update$: EventEmitter<any> = new EventEmitter();

    constructor() {
    }

    delete(){
      this.delete$.emit(this.music);
    }

    modify(){
      this.update$.emit(this.music);
    }

}
