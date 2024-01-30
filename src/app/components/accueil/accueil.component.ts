import {Component} from '@angular/core';
import {MatCard} from "@angular/material/card";
import {ListeMusiquesComponent} from "../liste-musiques/liste-musiques.component";
import {MatFormField, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {Music} from "../../model/music";
import {MatIcon} from "@angular/material/icon";
import {MatButton} from "@angular/material/button";
import {FormControl, FormGroup, FormsModule} from "@angular/forms";
import {MusiqueService} from "../../services/musique/musique.service";
import {NgForOf, NgIf} from "@angular/common";
import {CarteComponent} from "../carte/carte.component";

@Component({
  selector: 'app-accueil',
  standalone: true,
  imports: [
    MatCard,
    ListeMusiquesComponent,
    MatFormField,
    MatInput,
    MatLabel,
    MatIcon,
    MatButton,
    MatSuffix,
    NgIf,
    FormsModule,
    NgForOf,
    CarteComponent
  ],
  templateUrl: './accueil.component.html',
  styleUrl: './accueil.component.css'
})
export class AccueilComponent {
  form: FormGroup;

  recherche: string = "";

  inputContent: string = "";
  musics: Music[] | undefined;

  constructor(private readonly service: MusiqueService) {
    this.form = AccueilComponent.buildForm();
  }

  search() {
    this.service.searchByTitle(this.recherche).subscribe((result:Music[]) => {
      this.musics = result;
    })
  }

  private static buildForm(): FormGroup {
    return new FormGroup({
      searchBar: new FormControl('')
    });
  }
}
