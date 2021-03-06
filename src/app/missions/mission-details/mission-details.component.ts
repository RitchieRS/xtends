import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { MissionService } from '../../xservices/mission/mission.service';
import { ReqMission, AMission, ContentMission } from '../../xmodels/missions';
import { __param } from 'tslib';
import { RespInf, Sondeo, SondeoInf } from 'src/app/xmodels/sondeinf';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.scss'],
})
export class MissionDetailsComponent implements OnInit {

  sondeInf : SondeoInf;
  respSondeo : RespInf[];
  sondeos : Sondeo[];
  idPV: number;
  dataMission: ReqMission;
  datamissionSucursal: any;
  infMission: AMission;
  preguntas: any;
  missionDetail: ContentMission;
  dataSondeo: any;
  estado: string;
  logoProyecto: any;
  sucursal: string;
  proyecto: string;
  formato: string;


  isLoadedComplite=0;


  constructor(
    private route: ActivatedRoute,
    private dataSondeoMissions: MissionService,
  ) {


   }

  ngOnInit() {

    this.idPV = Number(this.route.snapshot.paramMap.get('idPV'));
    console.log(this.idPV);
    const token = localStorage.getItem('token');
    const dataMission = {
      idPV: this.idPV
    };

    console.log('Inicia Servicio');
    ///this.dataDetalleMissions.keepMissionInfo(dataMission);
    this.dataSondeoMissions.srvSondeoMission(dataMission,token,)
    .subscribe( (res) => {
      if(res){
        console.log('Aqui imprime la respuesta');

        this.sondeInf = res;
        this.respSondeo = this.sondeInf.resp;
        this.estado = this.sondeInf.resp[0].estado;
        this.logoProyecto = this.sondeInf.resp[0].logoProyecto;
        this.sucursal = this.sondeInf.resp[0].sucursal;
        this.proyecto = this.sondeInf.resp[0].proyecto;
        this.formato = this.sondeInf.resp[0].formato;

        this.isLoadedComplite=1;
        this.preguntas = this.respSondeo[0].sondeos;
        console.log(this.preguntas);


      }
    });
  }


  // async mostrarDetalleSondeos(){
  //   const token = localStorage.getItem('token');
  //   this.dataDetalleMissions.getDetailMission(token)
  //   .subscribe( dataDetalleMissions => {
  //     console.log(dataDetalleMissions);
  //   });
  // }

}
