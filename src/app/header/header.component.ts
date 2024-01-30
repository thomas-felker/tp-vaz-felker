import {Component, Input} from '@angular/core';
import {DrawerComponent} from "../drawer/drawer.component";
import {RouterLink} from "@angular/router";
import {MatToolbar} from "@angular/material/toolbar";
import {MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'header',
  standalone: true,
  imports: [
    RouterLink,
    MatToolbar,
    MatIconButton,
    MatIcon
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() drawer!: DrawerComponent;

  constructor() {
    //Vide
  }
}
