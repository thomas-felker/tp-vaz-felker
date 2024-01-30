import {Component, ViewChild} from '@angular/core';
import {RouterLink, RouterOutlet} from "@angular/router";
import {MatDrawer, MatDrawerContainer, MatDrawerContent} from "@angular/material/sidenav";
import {MatIcon} from "@angular/material/icon";
import {MatListItem, MatNavList} from "@angular/material/list";

@Component({
  selector: 'drawer',
  standalone: true,
  imports: [
    RouterLink,
    MatIcon,
    MatListItem,
    MatDrawer,
    MatNavList,
    MatDrawerContent,
    RouterOutlet,
    MatDrawerContainer
  ],
  templateUrl: './drawer.component.html',
  styleUrl: './drawer.component.css'
})
export class DrawerComponent {
  @ViewChild(MatDrawer) drawer!: MatDrawer;

  public toggleDrawer():void {
    this.drawer.toggle();
  }
}
