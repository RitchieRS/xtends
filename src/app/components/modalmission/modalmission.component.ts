import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogmissionComponent } from './dialogmission/dialogmission.component';

@Component({
  selector: 'app-modalmission',
  templateUrl: './modalmission.component.html',
  styleUrls: ['./modalmission.component.scss'],
})
export class ModalmissionComponent {

  constructor(public dialog: MatDialog) { }

  openDialog() {
    this.dialog.open(DialogmissionComponent);
  }
}

