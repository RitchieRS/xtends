import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-modalcodigo',
  templateUrl: './modalcodigo.component.html',
  styleUrls: ['./modalcodigo.component.scss'],
})
export class ModalcodigoComponent{

  constructor(public dialog: MatDialog) { }
  openDialog() {
    this.dialog.open(DialogCodigo,{});
  }
}

@Component({
  selector: 'dialogcodigo',
  templateUrl: './dialogcodigo.html',
})
export class DialogCodigo {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
}
