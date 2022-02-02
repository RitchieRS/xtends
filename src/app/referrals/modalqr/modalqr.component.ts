import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-modalqr',
  templateUrl: './modalqr.component.html',
  styleUrls: ['./modalqr.component.scss'],
})
export class ModalqrComponent {

  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(DialogQr);
  }
}


@Component({
  selector: 'dialogqr',
  templateUrl: './dialogqr.html',
})
export class DialogQr {}
