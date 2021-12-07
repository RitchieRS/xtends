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


  userResponse : UserProfile;
  profileData : ProfileResp;
  nombre : string;
  datosCompletosStr:string;
  datosCompletosN:number;
  referidosPorcentajeStr:string;
  referidosPorcentajeN:number;
  fotoId:number;
  constructor(private route: ActivatedRoute,private srvProfile : InfoService) { }
  
  ngOnInit() {
    const token = localStorage.getItem('token');
    this.srvProfile.getProfileInformation(token).subscribe((res) =>{
      if(res){
        this.userResponse = res;
        this.profileData = this.userResponse.resp;
        this.nombre = this.profileData.nombre;

        this.datosCompletosStr = this.profileData.nivelesDatos.datosComplemento;
        this.datosCompletosN = Number(this.datosCompletosStr.substring(0,this.datosCompletosStr.length-1))/100;
        this.referidosPorcentajeStr =  this.profileData.nivelesDatos.referidosInvitados;
        this.referidosPorcentajeN = Number(this.referidosPorcentajeStr.substring(0,this.referidosPorcentajeStr.length-1))/100;
        this.fotoId = this.profileData.nivelesDatos.fotoID;

      }
    })
  }

}
