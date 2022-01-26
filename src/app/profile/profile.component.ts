import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProfileResp, UserProfile } from '../xmodels/user';
import { InfoService } from '../xservices/user/info.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  habilidades = [
    {
      color:'skybluextend',
      colortwo:'primary',
      tipo:'Básico de Promotoría',
      avance:'0.5',
      icon:'promotoria.svg',
      // pasos:['1. Ingresox','2. Documentación','3. Ubicación', '4. Limpieza', '5. Precios']
    },
    {
      color:'greenxtend',
      colortwo:'success',
      tipo:'Fotografía Anaquel',
      avance:'0.25',
      icon:'anaqueleo.svg',
    },
  ];
  pasos = [
    {
      color:'#90c04e',
      colortwo:'success',
      icon:'checkmark-circle',
      title:'1. Ingreso a tienda por persona',
      video:'Video 30 seg.',
      score:'8/9'
    },
    {
      color:'#90c04e',
      colortwo:'success',
      icon:'checkmark-circle',
      title:'2. Documentación y credencial',
      video:'Video 30 seg.',
      score:'7/9'
    },
    {
      color:'#90c04e',
      colortwo:'success',
      icon:'checkmark-circle',
      title:'3. Ubicación de productos',
      video:'Video 30 seg.',
      score:'6/9'
    },
    {
      color:'#90c04e',
      colortwo:'danger',
      icon:'close-circle',
      title:'4. Limpieza y acomodo de anaquel',
      video:'Video 30 seg.',
      score:'5/9'
    },
    {
      color:'#90c04e',
      colortwo:'navyblue',
      icon:'play-circle',
      title:'5. Precios y Descuentos',
      video:'Video 30 seg.',
      score:'4/9'
    },
  ];
  selectedTrabajoInteres: string;
  selectedZonaInteres: string;

  userResponse : UserProfile;
  profileData : ProfileResp;
  nombre : string;
  datosCompletosStr:string;
  datosCompletosN:number;
  referidosPorcentajeStr:string;
  referidosPorcentajeN:number;
  fotoId:number;
  amat:string;
  apat: string;
  dirAlcadia: string;
  dirCP: string;
  dirCalle:string;
  dirCd: string;
  dirColonia:string;
  dirNumExt: string;
  dirNumInt: string;
  email: string;
  fechaNacimiento: Date;
  movil: string;
  constructor(private route: ActivatedRoute,private srvProfile : InfoService) { }

  ngOnInit() {
    const token = localStorage.getItem('token');
    this.srvProfile.getProfileInformation(token).subscribe((res) =>{
      if(res){
        this.userResponse = res;
        this.profileData = this.userResponse.resp;
        this.nombre = this.profileData.informacion.nombre;
        this.amat = this.profileData.informacion.amat;
        this.apat = this.profileData.informacion.apat;
        this.dirAlcadia = this.profileData.informacion.dirAlcadia;
        this.dirCP = this.profileData.informacion.dirCP;
        this.dirCalle = this.profileData.informacion.dirCalle;
        this.dirCd = this.profileData.informacion.dirCd;
        this.dirColonia = this.profileData.informacion.dirColonia;
        this.dirNumExt = this.profileData.informacion.dirNumExt;
        this.dirNumInt = this.profileData.informacion.dirNumInt;
        this.email =  this.profileData.informacion.email;
        this.fechaNacimiento = this.profileData.informacion.fechaNacimiento;
        this.movil = this.profileData.informacion.movil;

        this.datosCompletosStr = this.profileData.nivelesDatos.datosComplemento;
        this.datosCompletosN = Number(this.datosCompletosStr.substring(0,this.datosCompletosStr.length-1))/100;
        this.referidosPorcentajeStr =  this.profileData.nivelesDatos.referidosInvitados;
        this.referidosPorcentajeN = Number(this.referidosPorcentajeStr.substring(0,this.referidosPorcentajeStr.length-1))/100;
        this.fotoId = this.profileData.nivelesDatos.fotoID;

      }
    })
  }

}
