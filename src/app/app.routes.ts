import { Routes } from '@angular/router';
import {AccueilComponent} from "./components/accueil/accueil.component";
import {DefaultPageComponent} from "./components/default-page/default-page.component";

export const routes: Routes = [
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path:'accueil', component: AccueilComponent },
  { path:'default-page', component: DefaultPageComponent }
];
