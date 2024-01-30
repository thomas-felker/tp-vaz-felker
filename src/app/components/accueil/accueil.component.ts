import {Component, ElementRef, ViewChild} from '@angular/core';
import {MatCard} from "@angular/material/card";
import {ListeMusiquesComponent} from "../liste-musiques/liste-musiques.component";
import {TableauComponent} from "../tableau/tableau.component";
import {MatFormField} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    MatCard,
    ListeMusiquesComponent,
    MatFormField,
    MatInput
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  @ViewChild("nom") nom: ElementRef<HTMLElement> | undefined;
  @ViewChild("prenom") prenom: ElementRef<HTMLElement> | undefined;

  ngAfterViewInit(): void {
    this.nom!.nativeElement!.innerHTML = "TEST";
    this.prenom!.nativeElement!.innerHTML = "Thomas";
  }
}
