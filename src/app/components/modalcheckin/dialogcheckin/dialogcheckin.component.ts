import { Router} from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogcheckin',
  templateUrl: './dialogcheckin.component.html',
  styleUrls: ['./dialogcheckin.component.scss'],
})
export class DialogcheckinComponent implements OnInit {
  colorServicio: string;
  idProyecto: string;
  idCliente: string;

  constructor(
    public dialog: MatDialog,
    private router: Router,@Inject(MAT_DIALOG_DATA)
    public data: {colorServicio: string ,
                  idProyecto : string ,
                  idCliente: string ,
                 }
    )
    {
    this.colorServicio = this.data.colorServicio;
    this.idProyecto  =  this.data.idProyecto;
    this.idCliente =  this.data.idCliente;
    }

  ngOnInit() {}

  training(){
    this.dialog.closeAll();
    console.log(this.colorServicio);
    console.log(this.idProyecto);
    console.log(this.idCliente);
    this.router.navigate(['trainings-list/'+this.colorServicio+'/'+this.idCliente+'/'+this.idProyecto]);


  }



}
