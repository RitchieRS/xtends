import { Component } from '@angular/core';
import { HomeService  } from 'src/app/xservices/home/home.service';
import { Router } from '@angular/router';
import { Home, Section1, Section1Content,Section3,Section3Content } from '../xmodels/home';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  missions:Section1;
  missionsData :Section1Content[];
  missionAval:Section3;
  missionsAvalData :Section3Content[];
   /* {
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
  ];*/

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
  dataHome : Home;
  reqHome : string;
  isMissionsOn=false;

  
  constructor(private homeService : HomeService) {}
  
  ngOnInit() {

     this.reqHome = localStorage.getItem('token');
     //console.log(this.reqHome);
     this.homeService.getDataHome(this.reqHome).subscribe((res) =>{
       if(res){
        this.dataHome=  res;+
        console.log(this.dataHome);
        /* Misiones Activas*/
        if(this.dataHome.section1.content.length>=1){
         this.missions = this.dataHome.section1;
         this.missionsData = this.dataHome.section1.content;
         console.log(this.missionsData);
        }
        /* Misiones Disponibles*/
        if(this.dataHome.section3.content.length>=1){
          this.missionAval = this.dataHome.section3;
          this.missionsAvalData = this.dataHome.section3.content;
          console.log(this.missionsAvalData);
         }
        console.log(this.dataHome.section1);
        
        console.log(this.dataHome);
       }
       
      
    
    }) 
  }
  

}
