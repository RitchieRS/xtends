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


  constructor() { }



}
