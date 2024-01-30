import {Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {MatError, MatFormField, MatLabel} from "@angular/material/form-field";
import {MatCard, MatCardActions, MatCardContent, MatCardTitle} from "@angular/material/card";
import {MatIcon} from "@angular/material/icon";
import {MatChip, MatChipGrid, MatChipInput, MatChipInputEvent, MatChipListbox} from "@angular/material/chips";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {Music} from "../../model/music";
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {MatButton, MatFabButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";


@Component({
  selector: 'app-formulaire',
  standalone: true,
  imports: [
    MatLabel,
    MatFormField,
    MatCardActions,
    MatIcon,
    MatCard,
    MatCardContent,
    MatCardTitle,
    ReactiveFormsModule,
    NgIf,
    MatChip,
    MatChipInput,
    MatButton,
    MatInput,
    MatFabButton,
    MatError,
    MatChipListbox,
    MatChipGrid,
    NgForOf,
    NgOptimizedImage
  ],
  templateUrl: './formulaire.component.html',
  styleUrl: './formulaire.component.css'
})
export class FormulaireComponent {

  form: FormGroup;
  @Input() musicModel: Music | undefined;
  @ViewChild("fileInput") fileInput!: ElementRef;

  @Output('cancel') cancelEvent$: EventEmitter<any>;
  @Output('submit') submitEvent$: EventEmitter<any>;

  constructor() {
    this.submitEvent$ = new EventEmitter();
    this.cancelEvent$ = new EventEmitter();
    this.form = FormulaireComponent.buildForm();
    this.form.patchValue({
      id: this.musicModel?.id,
      title: this.musicModel?.title,
      album: this.musicModel?.album,
      artist: this.musicModel?.artist,
      style: this.musicModel?.style || [],
      duration: this.musicModel?.duration,
      date: this.musicModel?.date,
      description: this.musicModel?.description,
      picture: this.musicModel?.picture
    });
  }

  cancel() {
    this.cancelEvent$.emit();
  }

  submit(music: Music) {
    music.picture = this.musicModel?.picture;
    this.submitEvent$.emit(music);
  }


  addChipset(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.musicModel?.style!.push(value);
    }
    event.chipInput!.clear();
  }

  removeChipset(titre: any): void {
    const index = this.musicModel?.style!.indexOf(titre);
    // @ts-ignore
    this.musicModel?.style!.splice(index, 1);
  }

  onFileSelected(event:Event | null) {
    const files = (<HTMLInputElement>event?.currentTarget).files;
    const file:File | null = files!.item(0);

    if (file) {
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (_event) => {
        if(this.musicModel != undefined)
          this.musicModel.picture = reader.result;
      }
    }
  }
  private static buildForm(): FormGroup {
    return new FormGroup({
      id: new FormControl(''),
      title: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      album: new FormControl('', Validators.compose([Validators.required, Validators.minLength(2)])),
      artist: new FormControl('', Validators.required),
      style: new FormControl(''),
      duration: new FormControl(''),
      date: new FormControl(''),
      description: new FormControl(''),
    });
  }

}
