import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xtend-levels',
  templateUrl: './xtend-levels.component.html',
  styleUrls: ['./xtend-levels.component.scss'],
})
export class XtendLevelsComponent implements OnInit {

  niveles = [
    {
      titulo:'Oro',
      icon: 'oro.png',
    },
    {
      titulo:'Plata',
      icon: 'plata.png',
    },
    {
      titulo:'Bronce',
      icon: 'bronce.png',
    },
  ];
  documentos = [
    {
     titulo:'Datos completos',
    },
    {
      titulo:'INE',
     },
     {
      titulo:'CURP',
     },
     {
      titulo:'Comprobante de domicilio',
     },
  ];

  beneficios = [
    {
    titulo:'Misiones Exclusivas',
    },
    {
    titulo:'Descuentos especiales',
    },
    {
    titulo:'Programa varias misiones',
    },
  ];

  constructor() { }

  ngOnInit() {}

}
