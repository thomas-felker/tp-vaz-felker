import { Routes } from '@angular/router';
import {AccueilComponent} from "./components/accueil/accueil.component";
import {ListeMusiquesComponent} from "./components/liste-musiques/liste-musiques.component";
import {AleatoireMusiqueComponent} from "./components/aleatoire-musique/aleatoire-musique.component";

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path:'home', component: AccueilComponent },
  { path:'random', component: AleatoireMusiqueComponent },
  { path:'list', component: ListeMusiquesComponent }
];
