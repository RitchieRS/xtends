import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { MissionService } from '../../xservices/mission/mission.service';
import { ReqMission, AMission, ContentMission } from '../../xmodels/missions';
import { __param } from 'tslib';

@Component({
  selector: 'app-mission-details',
  templateUrl: './mission-details.component.html',
  styleUrls: ['./mission-details.component.scss'],
})
export class MissionDetailsComponent implements OnInit {
  idPV: number;
  sucursal: any;
  infoMission: any;
  dataMission: ReqMission;
  datamissionSucursal: any;

  infMission: AMission;
  preguntas: any;
  missionDetail: ContentMission;

  dataSondeo: any;


  constructor(
    private route: ActivatedRoute,
    private dataDetalleMissions: MissionService,
  ) {
    

   }

  ngOnInit() {

    this.idPV = Number(this.route.snapshot.paramMap.get('idPV'));
    console.log(this.idPV);
    const token = localStorage.getItem('token');
    const dataMission = {
      idPV: this.idPV
    };
    console.log("Inicia Servicio")
    ///this.dataDetalleMissions.keepMissionInfo(dataMission);
    this.dataDetalleMissions.srvSondeoMission(token,dataMission,)
    .subscribe( (res) => {
      if(res){
        console.log("Aqui imprime la respuuesta ")
        
        this.infMission = res;
        this.preguntas = res.resp;
        console.log(this.preguntas)
        
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
