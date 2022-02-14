import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProductoComponent } from './producto/producto.component';

@Component({
  selector: 'app-sku',
  templateUrl: './sku.component.html',
  styleUrls: ['./sku.component.scss'],
})
export class SkuComponent implements OnInit {
  
  @Input() dependePregunta: number;
  @Input() dependeRespuesta: number;
  @Input() idPregunta: number;
  @Input() maximo: number;
  @Input() minimo: number;
  @Input() obligatorio: number;
  @Input() opciones: string[];
  @Input() productos: any[];
  @Input() orden: number;
  @Input() pregunta: string;
  @Input() puntaje: number;
  @Input() tipo: string;
  @Input() urlImage: string;

  
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    console.log(this.productos);
  }

  openDialog(producto:any){
    this.dialog.open(ProductoComponent,{
      data: {
        img : producto.img,
        nombre : producto.nombre,
        presentacion : producto.presentacion,
        preguntas : producto.preguntas,
        sku : producto.sku,

      }
    });
  }

}
