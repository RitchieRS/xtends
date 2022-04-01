import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sku-inf',
  templateUrl: './sku.component.html',
  styleUrls: ['./sku.component.scss'],
})
export class SkuComponent implements OnInit {
    @Input() idPregunta: number;
    @Input() pregunta: string;
    @Input() respuesta: string;
    @Input() tipo: string;
 

  constructor() { }

  ngOnInit() {
    console.log(this.pregunta);

  }

}
