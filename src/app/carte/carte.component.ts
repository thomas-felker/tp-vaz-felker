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
import { Music } from "../model/music"

@Component({
  selector: 'app-carte',
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
        MatChipListbox
    ],
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css'
})

export class CarteComponent {
    @Input() musics: Music[] | undefined;

    // Supression, modififactions
    @Output() cardEvent: EventEmitter<string>

    constructor() {
      this.cardEvent = new EventEmitter<string>();
    }

    delete(){
  
    }

    modify(){

    }

}
