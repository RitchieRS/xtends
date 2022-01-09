import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogCaptureproductinfoComponent } from './dialog-captureproductinfo/dialog-captureproductinfo.component';

@Component({
  selector: 'app-modal-captureproductinfo',
  templateUrl: './modal-captureproductinfo.component.html',
  styleUrls: ['./modal-captureproductinfo.component.scss'],
})
export class ModalCaptureproductinfoComponent {

  constructor( public dialog: MatDialog) { }

  openDialog(){
    this.dialog.open(DialogCaptureproductinfoComponent);
  }

}
