import { Router} from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogcheckin',
  templateUrl: './dialogcheckin.component.html',
  styleUrls: ['./dialogcheckin.component.scss'],
})
export class DialogcheckinComponent implements OnInit {
  colorServicio:string;
  constructor(public dialog: MatDialog,private router: Router,@Inject(MAT_DIALOG_DATA) public data: {colorServicio:string }) {
    this.colorServicio = this.data.colorServicio;
   }
      
  ngOnInit() {}

  training(){
    this.dialog.closeAll();
    console.log(this.colorServicio)
    this.router.navigate(['trainings-list/'+this.colorServicio]);

    
  }



}
