import { Component } from '@angular/core';

@Component({
  selector: 'app-xtend-levels',
  templateUrl: './xtend-levels.component.html',
  styleUrls: ['./xtend-levels.component.scss'],
})
export class XtendLevelsComponent{

  niveles = {
    elite: {
      title: 'Élite',
      icon: 'elite.png',
      docs: [
        {title: 'Datos completos'},
        {title: 'INE'},
        {title: 'CURP'},
        {title: 'Comp. de domicilio'},
        {title: 'Zonas de Interés'},
        {title: 'Tipos de misiones de interés'},
        {title: 'Foto rostro tipo ID'},
        {title: 'Referidos invitados 10'},
        {title: 'Misiones Completas 15'},
        {title: 'Habilidades 3+'},
        {title: 'RRSS FB/IG 1+'},
        {title: 'Estrellas obtenidas (calificaciones) 4'},
      ],
    },

    oro: {
      title: 'Oro',
      icon: 'oro.png',
      docs: [
        {title: 'Datos completos'},
        {title: 'INE'},
        {title: 'CURP'},
        // {title: 'Comp. de domicilio'},
        {title: 'Zonas de Interés'},
        {title: 'Tipos de misiones de interés'},
        {title: 'Foto rostro tipo ID'},
        {title: 'Referidos invitados 8'},
        {title: 'Misiones Completas 5'},
        {title: 'Habilidades 2'},
        {title: 'RRSS FB/IG 1'},
        {title: 'Estrellas obtenidas (calificaciones) 3.5'},
      ],
    },
    plata: {
      title: 'Plata',
      icon: 'plata.png',
      docs: [
        {title: 'Datos completos'},
        {title: 'INE'},
        // {title: 'CURP'},
        // {title: 'Comp. de domicilio'},
        {title: 'Zonas de Interés'},
        {title: 'Tipos de misiones de interés'},
        {title: 'Foto rostro tipo ID'},
        {title: 'Referidos invitados 8'},
        {title: 'Misiones Completas 5'},
        {title: 'Habilidades 2'},
        // {title: 'RRSS FB/IG 1'},
        // {title: 'Estrellas obtenidas (calificaciones) 3.5'},
      ],
    },
    bronce: {
      title: 'Bronce',
      icon: 'bronce.png',
      docs: [
        {title: 'Datos completos'},
        {title: 'INE'},
        // {title: 'CURP'},
        // {title: 'Comp. de domicilio'},
        // {title: 'Zonas de Interés'},
        // {title: 'Tipos de misiones de interés'},
        {title: 'Foto rostro tipo ID'},
        {title: 'Referidos invitados 3'},
        // {title: 'Misiones Completas 5'},
        // {title: 'Habilidades 2'},
        // {title: 'RRSS FB/IG 1'},
        // {title: 'Estrellas obtenidas (calificaciones) 3.5'},
      ],
    },

  };
  
  dataniveles = Object.values(this.niveles);

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



}
