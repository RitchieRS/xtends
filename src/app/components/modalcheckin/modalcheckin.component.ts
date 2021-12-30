import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogcheckinComponent } from './dialogcheckin/dialogcheckin.component';

@Component({
  selector: 'app-modalcheckin',
  templateUrl: './modalcheckin.component.html',
  styleUrls: ['./modalcheckin.component.scss'],
})
export class ModalcheckinComponent {

  constructor(public dialog: MatDialog) { }
  
  openDialog(){
    this.dialog.open(DialogcheckinComponent)
  }
}
