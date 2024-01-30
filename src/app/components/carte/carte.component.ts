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
    MatChipListbox
  ],
  templateUrl: './carte.component.html',
  styleUrl: './carte.component.css'
})

export class CarteComponent {
    @Input() music: Music | undefined;

    // Supression, modififactions
    @Output() cardEvent: EventEmitter<string>

    constructor() {
      this.cardEvent = new EventEmitter<string>();
    }

    delete(){
      this.cardEvent.emit("delete");
    }

    modify(){
      this.cardEvent.emit("modify")
    }

}
