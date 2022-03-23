import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { from } from 'rxjs';
import { MissionService } from '../../xservices/mission/mission.service';
import { ReqMission, MisionSection3, AMission, ContentMission } from '../../xmodels/missions';
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
  detalazoChingon: MisionSection3;
  infMission: AMission;

  missionsection3: MisionSection3;
  missionDetail: ContentMission;

  dataSondeo: any;


  constructor(
    private route: ActivatedRoute,
    private dataDetalleMissions: MissionService,
  ) {
    this.idPV = Number(this.route.snapshot.paramMap.get('idPV'));

   }

  ngOnInit() {
    const token = localStorage.getItem('token');
    const dataMission = {
      idPV: this.idPV
    };

    this.dataDetalleMissions.keepMissionInfo(dataMission);
    this.dataDetalleMissions.getValeChiles(dataMission,token)
    .subscribe( (res) => {
      if(res){
        this.infMission = res;
        this.missionsection3  = this.infMission.section3;
        console.log(this.infMission);
        console.log(this.missionsection3.content[4].cadena);
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
