import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  misiones = [
    {
     logoimg:'shell.svg',
     marca:'shell',
     tipo:'Anaquelero',
     txt:'Tienes hasta el 3 de noviembre para completarla',
     novisitas:'Visita 3 tiendas',
     preciopago:'300 por visita',
     btnlink:''
    },
    {
      logoimg:'minisu.png',
      marca:'minisu',
      tipo:'Promotor',
      txt:'Tienes hasta el 5 de noviembre para completarla',
      novisitas:'Visita 6 tiendas',
      preciopago:'400 por visita',
      btnlink:''
     },
  ];

  promociones = [
    {
      img:'refiere-a-amigo.png',
      titulo:'Refiere a un amigo y gana dinero',
      texto:'Si conoces a alguien que este interesado en realizar actividades en Punto de Venta, refiérelo y gana $200 pesos.',
      btnlink:''
    },
    {
      img:'minisu.png',
      titulo:'Refiere a un amigo y gana dinero',
      texto:'Si conoces a alguien que este interesado en realizar actividades en Punto de Venta, refiérelo y gana $200 pesos.',
      btnlink:''
    },

  ];

  misdisponibles = [
    {
      logoimg:'shell.svg',
      tipo:'Anaquelero',
      novisitas:'Visita 3 tiendas',
      preciopago:'$300 ',
      btnlink:'',
      nivel:'Bronce',
      canal:'Especializado',
      cadena:'Autozone',
      tiempopromedio:'30 min',
     },
     {
      logoimg:'sams.png',
      tipo:'Demostrador',
      novisitas:'Visita 5 tiendas',
      preciopago:'$200',
      btnlink:'',
      nivel:'Plata',
      canal:'Especializado',
      cadena:'Sams',
      tiempopromedio:'40 min',
     },
  ];

  panelOpenState = false;
  constructor() {}

}
