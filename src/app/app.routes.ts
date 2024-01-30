import { Routes } from '@angular/router';
import {AccueilComponent} from "./components/accueil/accueil.component";
import {DefaultPageComponent} from "./components/default-page/default-page.component";
import {ListeMusiquesComponent} from "./components/liste-musiques/liste-musiques.component";

export const routes: Routes = [
  { path: '', redirectTo: 'liste', pathMatch: 'full' },
  { path:'accueil', component: AccueilComponent },
  { path:'liste', component: ListeMusiquesComponent },
  { path:'default-page', component: DefaultPageComponent }
];
