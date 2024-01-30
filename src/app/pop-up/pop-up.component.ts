import { Component } from '@angular/core';
import {FormulaireComponent} from "../components/formulaire/formulaire.component";
import {Music} from "../model/music";
import {MatDialogRef} from "@angular/material/dialog";

export type PopupAction = Music & {mode: string};

@Component({
  selector: 'app-pop-up',
  standalone: true,
  imports: [
    FormulaireComponent
  ],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.css'
})
export class PopUpComponent {
  constructor(public dialogRef: MatDialogRef<PopUpComponent>) {}

  closeDialog(result: Music & {mode?: string} | null = null) {
    this.dialogRef.close(result);
  }

  onCancel() {
    this.closeDialog();
  }

  onCreate(music: Music) {
    this.closeDialog({...music, mode: 'create'});
  }

  onUpdate(music: Music) {
    this.closeDialog({...music, mode: 'update'});
  }
}
