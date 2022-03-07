import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { SnumericaComponent } from '../../snumerica/snumerica.component';
@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss'],
})
export class ProductoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data : {
                                                      img : string,
                                                      nombre : string,
                                                      presentacion : string,
                                                      preguntas : any[],
                                                      sku : string,

                                                    }) { 

  }

  ngOnInit() {}

}
