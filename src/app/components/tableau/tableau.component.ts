import {Component, Input} from '@angular/core';
import {Music} from "../../model/music";
import {MatCell, MatHeaderCell, MatTable} from "@angular/material/table";

@Component({
  selector: 'app-tableau',
  standalone: true,
  imports: [
    MatTable,
    MatHeaderCell,
    MatCell
  ],
  templateUrl: './tableau.component.html',
  styleUrl: './tableau.component.css'
})
export class TableauComponent {
  @Input() music: Music[] | undefined;


}
