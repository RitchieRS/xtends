import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogacceptmissionComponent } from './dialogacceptmission/dialogacceptmission.component';

@Component({
  selector: 'app-modalacceptmission',
  templateUrl: './modalacceptmission.component.html',
  styleUrls: ['./modalacceptmission.component.scss'],
})
export class ModalacceptmissionComponent {

  constructor(public dialog: MatDialog) { }
  
  openDialog(){
    this.dialog.open(DialogacceptmissionComponent)
  }
}
