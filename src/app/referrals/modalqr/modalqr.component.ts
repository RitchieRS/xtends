import { Component, Inject, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modalqr',
  templateUrl: './modalqr.component.html',
  styleUrls: ['./modalqr.component.scss'],
})
export class ModalqrComponent implements OnInit{


  @Input() imageqr : string;
  
  constructor(public dialog: MatDialog) {
    console.log(this.imageqr);
   }


  ngOnInit(): void {
    
  }
  openDialog() {
    this.dialog.open(DialogQr,{
      data: { qrimage: this.imageqr,text:"texto test" },
    });
  }
}


@Component({
  selector: 'dialogqr',
  templateUrl: './dialogqr.html',
})
export class DialogQr {
  text:string;
  urlQR:string
  constructor(@Inject(MAT_DIALOG_DATA) public data: { qrimage: string,text:string}){
    console.log(this.data.qrimage);
    console.log(this.data.text);
    this.urlQR = this.data.qrimage;
  }

 
  
  
}
