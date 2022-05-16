import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { MissionService } from '../xservices/mission/mission.service';
import { Mission ,RespMission,Habilidades, ReqMission } from '../xmodels/missions';

@Component({
  selector: 'app-mission',
  templateUrl: './mission.component.html',
  styleUrls: ['./mission.component.scss'],
})
export class MissionComponent  {

  infMission : Mission;
  missionDetail: RespMission;
  nombreCliente: string;
  imgCliente: string;
  nombreActividad: string;
  nivel: number;
  pago: string;
  cadena: string;
  ciudad: string;
  estado: string;
  tiempo: string;
  dataMission: ReqMission;
  token: string;
  message = '';
  accepted = false;
  habilidades:Habilidades[];
  TextState= "Enviar";
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

  idPV: number;
  colorServicio: string;
  constructor(
    private route: ActivatedRoute,
    private srvMission: MissionService )
    {
    this.idPV = Number(this.route.snapshot.paramMap.get('idPV'));
    this.colorServicio = this.route.snapshot.paramMap.get('colorServicio');
    }

  ngOnInit() {

    const token = localStorage.getItem('token');
    const dataMission = {
      "idPV": this.idPV
    };
    this.srvMission.keepMissionInfo(dataMission);
    this.srvMission.getMissionXTiendaProyecto(dataMission,token)
    .subscribe((res) =>{
      if(res){
        
        this.infMission = res;
        this.missionDetail  = this.infMission.resp;
        this.nombreCliente =this.missionDetail.nombreCliente;
        this.imgCliente = this.missionDetail.imgCliente;
        this.nombreActividad = this.missionDetail.nombreActividad;
        this.pago = this.missionDetail.pago;
        this.nivel = this.missionDetail.nivel;
        this.cadena = this.missionDetail.detalle.cadena;
        this.ciudad = this.missionDetail.detalle.ciudad;
        this.tiempo  = this.missionDetail.detalle.tiempo;
        this.estado = this.missionDetail.detalle.estado;
        this.habilidades = this.missionDetail.habilidades;
        console.log(this.habilidades);
        /* Misiones Activas*/
        if(this.infMission.resp.idTienda != undefined){

        }
      }
    })

  }



  acceptMissionXProyect(){
    console.log("Start Mission");
  }

}
