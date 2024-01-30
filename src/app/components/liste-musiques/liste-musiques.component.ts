import {ChangeDetectorRef, Component, Input} from '@angular/core';
import {MusiqueService} from "../../services/musique/musique.service";
import {Music} from "../../model/music";
import {NgFor, NgIf, NgSwitch, NgSwitchCase} from "@angular/common";
import {CarteComponent} from "../carte/carte.component";
import {TableauComponent} from "../tableau/tableau.component";
import {MatDialogRef, MatDialog} from "@angular/material/dialog";
import {mergeMap} from "rxjs";
import {PopUpComponent} from "../../pop-up/pop-up.component";


@Component({
  selector: 'liste-musiques',
  standalone: true,
  imports: [
    NgFor,
    CarteComponent,
    NgSwitch,
    NgSwitchCase,
    TableauComponent,
    NgIf
  ],
  templateUrl: './liste-musiques.component.html',
  styleUrl: './liste-musiques.component.css'
})
export class ListeMusiquesComponent {
  private addDialog: MatDialogRef<PopUpComponent> | any;
  @Input()
  musicsInput: Music[] | undefined;
  musics: Array<Music> = [];
  dialogStatus: string = "inactive";
  view = 'card';

  constructor(private readonly musicService: MusiqueService, public dialog: MatDialog,private cdr: ChangeDetectorRef
  ) {
  }

  ngOnInit(): void {
    if (this.musicsInput == undefined) {
      this.musicService.fetchAll().subscribe((musics: Array<Music>) => {
        this.musics = musics;
      });
    }
    else {
      this.musics = this.musicsInput;
    }
  }

  showDialog() {
    this.dialogStatus = 'active';
    this.addDialog = this.dialog.open(PopUpComponent, {
      width: '600px',
      data: {}
    });

    this.addDialog.afterClosed().subscribe((person:any)=> {
      this.dialogStatus = 'inactive';
      if (person) {
        this.add(person);
      }
    });
  }

  add(music: Music){
    this.musicService
      .create(music)
      .pipe(mergeMap(() => this.musicService.fetchAll()))
      .subscribe(nvMusic => {
        this.musics = nvMusic;
        this.hideDialog();
      });
  }

  delete(music: Music) {
    this.musicService.delete(music.id!).subscribe(music => {
      this.musics = music;
      this.musicService.update(music);
      this.cdr.markForCheck();
    });
  }

  update(music: Music) {
    this.musicService
      .update(music)
      .pipe(mergeMap(() => this.musicService.fetchAll()))
      .subscribe(music => {
        this.musics = music;
        this.hideDialog();
      });
  }


  hideDialog() {
    this.dialogStatus = 'inactive';
    if(this.addDialog != undefined){
      this.addDialog.close();
    }
  }

  switchView() {
    this.view = this.view === 'card' ? 'tableau' : 'card';
  }

}
