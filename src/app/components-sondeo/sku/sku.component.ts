import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { DialogCaptureproductinfoComponent } from 'src/app/missions/modal-captureproductinfo/dialog-captureproductinfo/dialog-captureproductinfo.component';
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
  @Input() idSondeo: string;
  data:string
  idStrQuest:string
  barcode="Busca el producto";


  myControl = new FormControl();
  options: string[] = [];
  selected:string[]=[];
  filteredOptions: Observable<string[]>;

  constructor(public dialog: MatDialog) { 
    
  }

  ngOnInit() {

    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith('0'),
      map(value => this._filter(value)),
    );

    console.log(this.filteredOptions) 
    
    this.idStrQuest =  this.idSondeo + '||' + this.idPregunta.toString();
    console.log(this.idStrQuest);
    console.log(this.productos);
  }

  isValid=0;

  receiveBarCode($event) {
    this.barcode = $event
  }

  async openDialog(producto:any,index:number){
    console.log(index);
    const dialogRef = this.dialog.open(DialogCaptureproductinfoComponent ,{
          data: {
            img : producto.img,
            nombre : producto.nombre,
            presentacion : producto.presentacion,
            preguntas : producto.preguntas,
            sku : producto.sku,
            index: index,
            idPregunta : this.idPregunta,
            idInventario : this.idStrQuest
          }
        });
        dialogRef.afterClosed()
            .toPromise() // here you have a Promise instead an Observable
            .then(result => {
                this.isValid=Number(result);
                console.log(this.isValid);
            });

  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
    console.log("Filter");
    return this.productos.filter(producto => producto.sku === filterValue );
  }

  

}
