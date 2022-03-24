import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-xtend-levels',
  templateUrl: './xtend-levels.component.html',
  styleUrls: ['./xtend-levels.component.scss'],
})
export class XtendLevelsComponent implements OnInit{

  calificacion:string;

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
      beneficios: [
        {title: 'Todo tipo de misiones'},
        {title: 'Misiones 1º'},
        {title: 'Misiones 2º'},
        {title: 'Misiones 3º'},
        {title: '30% desc en tienda CEC'},
        // {title: '20% desc en tienda CEC'},
        // {title: '10% desc en tienda CEC'},
        {title: 'Misiones c/ envío de materiales'},
        {title: 'Apartado de misiones 8'},
        {title: 'Asignación visitas periódicas'},
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
      beneficios: [
        {title: 'Todo tipo de misiones'},
        {title: 'Misiones 1º'},
        {title: 'Misiones 2º'},
        // {title: 'Misiones 3º'},
        // {title: '30% desc en tienda CEC'},
        {title: '20% desc en tienda CEC'},
        // {title: '10% desc en tienda CEC'},
        // {title: 'Misiones c/ envío de materiales'},
        {title: 'Apartado de misiones 5'},
        {title: 'Asignación visitas periódicas'},
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
      beneficios: [
        {title: 'Todo tipo de misiones'},
        {title: 'Misiones 1º'},
        // {title: 'Misiones 2º'},
        // {title: 'Misiones 3º'},
        // {title: '30% desc en tienda CEC'},
        // {title: '20% desc en tienda CEC'},
        {title: '10% desc en tienda CEC'},
        // {title: 'Misiones c/ envío de materiales'},
        {title: 'Apartado de misiones 3'},
        // {title: 'Asignación visitas periódicas'},
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
      beneficios: [
        {title: 'Todo tipo de misiones'},
        // {title: 'Misiones 1º'},
        // {title: 'Misiones 2º'},
        // {title: 'Misiones 3º'},
        // {title: '30% desc en tienda CEC'},
        // {title: '20% desc en tienda CEC'},
        // {title: '10% desc en tienda CEC'},
        // {title: 'Misiones c/ envío de materiales'},
        {title: 'Apartado de misiones 1'},
        // {title: 'Asignación visitas periódicas'},
      ],
    },

  };
  dataniveles = Object.values(this.niveles);


  // beneficios = {
  //   elite: {
  //     types: [
  //       {title: 'Todo tipo de misiones'},
  //       {title: 'Misiones 1º'},
  //       {title: 'Misiones 2º'},
  //       {title: 'Misiones 3º'},
  //       {title: '30% desc en tienda CEC'},
  //       // {title: '20% desc en tienda CEC'},
  //       // {title: '10% desc en tienda CEC'},
  //       {title: 'Misiones c/ envío de materiales'},
  //       {title: 'Apartado de misiones 8'},
  //       {title: 'Asignación visitas periódicas'},
  //     ],
  //   },

  //   oro: {
  //     types: [
  //       {title: 'Todo tipo de misiones'},
  //       {title: 'Misiones 1º'},
  //       {title: 'Misiones 2º'},
  //       // {title: 'Misiones 3º'},
  //       // {title: '30% desc en tienda CEC'},
  //       {title: '20% desc en tienda CEC'},
  //       // {title: '10% desc en tienda CEC'},
  //       // {title: 'Misiones c/ envío de materiales'},
  //       {title: 'Apartado de misiones 5'},
  //       {title: 'Asignación visitas periódicas'},
  //     ],
  //   },
  //   plata: {
  //     types: [
  //       {title: 'Todo tipo de misiones'},
  //       {title: 'Misiones 1º'},
  //       // {title: 'Misiones 2º'},
  //       // {title: 'Misiones 3º'},
  //       // {title: '30% desc en tienda CEC'},
  //       // {title: '20% desc en tienda CEC'},
  //       {title: '10% desc en tienda CEC'},
  //       // {title: 'Misiones c/ envío de materiales'},
  //       {title: 'Apartado de misiones 3'},
  //       // {title: 'Asignación visitas periódicas'},
  //     ],
  //   },
  //   bronce: {
  //     types: [
  //       {title: 'Todo tipo de misiones'},
  //       // {title: 'Misiones 1º'},
  //       // {title: 'Misiones 2º'},
  //       // {title: 'Misiones 3º'},
  //       // {title: '30% desc en tienda CEC'},
  //       // {title: '20% desc en tienda CEC'},
  //       // {title: '10% desc en tienda CEC'},
  //       // {title: 'Misiones c/ envío de materiales'},
  //       {title: 'Apartado de misiones 1'},
  //       // {title: 'Asignación visitas periódicas'},
  //     ],
  //   },
  // };

  nivelTermo=([...Array(16).fill(0)]);
  nivelXtenderStr:string;
  nivelXtenderNum=0;
  constructor() { }


  ngOnInit(): void {
    this.nivelXtenderStr = localStorage.getItem('levelx');
    this.nivelXtenderNum =  Number(localStorage.getItem('levelnum'));
    if( this.nivelXtenderStr=='Plata'){
      this.nivelXtenderNum += 4;
    }
    else if ( this.nivelXtenderStr=='Oro'){
      this.nivelXtenderNum += 8;
    }
    else if ( this.nivelXtenderStr=='Elite'){
      this.nivelXtenderNum += 12;
    }

    for(var i = 0; i < this.nivelTermo.length; i++){
      if(i<this.nivelXtenderNum){
        this.nivelTermo[i]=1;
      }
    }

    console.log(this.nivelXtenderNum);

  }



}
