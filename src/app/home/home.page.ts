import { Component } from '@angular/core';
import { HomeService  } from 'src/app/xservices/home/home.service';
import { Router } from '@angular/router';
import { Home, Section1, Section1Content,Section3,Section3Content,Section2,Section2Content } from '../xmodels/home';
import { LoginService } from '../xservices/auth/login.service';
import { TransitionCheckState } from '@angular/material/checkbox';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  missions:Section1;
  missionsData :Section1Content[];
  banner:Section2;
  bannerData :Section2Content[];
  missionAval:Section3;
  missionsAvalData :Section3Content[];
  lat:any;
  lng:any;
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


  constructor(private homeService : HomeService,private auth : LoginService) {}

  ngOnInit() {

    this.lat = Number(localStorage.getItem('lat'));
    this.lng = Number(localStorage.getItem('lng'));
    console.log(this.lat);
    console.log(this.lng );

    console.log(this.auth.isLogged)
    this.auth.isLogged.subscribe( (log:any)=>{
        console.log(log)
    })

     this.reqHome = localStorage.getItem('token');
     console.log(this.reqHome);
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
        /* Banners*/
        if(this.dataHome.section2.content.length>=1){
          this.banner = this.dataHome.section2;
          this.bannerData = this.dataHome.section2.content;
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


  tipoServicio(tipo:string):any{
    let type={
      color:"",
      logo:""
    };
    switch(tipo) {
      case "Promotoria": {
        type.color='#229bd6';
        type.logo="promotoria.svg"
        break;
      }
      case  "Mistery": {
        type.color='#161949';
        type.logo="mystery.svg"
        break;
      }
      case "Demostración": {
        type.color='#825aa5';
        type.logo="demostrador.svg"
        break;
      }
      case "Anaqueleo": {
        type.color='#90c04e';
        type.logo="anaqueleo.svg"
        break;
      }
      default: {

      }
      type.color='#90c04e';
      type.logo="anaqueleo.svg"
      break;
      }
      return type;
    }


}
