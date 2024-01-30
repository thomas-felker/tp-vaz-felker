import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {DrawerComponent} from "./drawer/drawer.component";
import {HeaderComponent} from "./header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, DrawerComponent, HeaderComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
