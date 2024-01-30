import {Component, Input} from '@angular/core';
import {Music} from "../../model/music";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef, MatHeaderRow,
  MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {NgIf} from "@angular/common";
import {MatSort} from "@angular/material/sort";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'tableau',
  standalone: true,
  imports: [
    MatTable,
    MatHeaderCell,
    MatCell,
    NgIf,
    MatColumnDef,
    MatSort,
    MatHeaderCellDef,
    MatCellDef,
    MatHeaderRowDef,
    MatRow,
    MatHeaderRow,
    MatRowDef,
    MatPaginator
  ],
  templateUrl: './tableau.component.html',
  styleUrl: './tableau.component.css'
})
export class TableauComponent {
  @Input() datasource: Music[] | undefined;

  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'album',
    'artist',
    'duration',
    'date',
    'style',
    'picture'
  ];
}
