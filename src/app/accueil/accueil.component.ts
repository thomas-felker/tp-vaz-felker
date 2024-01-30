import {Component, ElementRef, ViewChild} from '@angular/core';
import {MatCard} from "@angular/material/card";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    MatCard
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  @ViewChild("nom") nom: ElementRef<HTMLElement> | undefined;
  @ViewChild("prenom") prenom: ElementRef<HTMLElement> | undefined;

  ngAfterViewInit(): void {
    this.nom!.nativeElement!.innerHTML = "FELKER";
    this.prenom!.nativeElement!.innerHTML = "Thomas";
  }
}
