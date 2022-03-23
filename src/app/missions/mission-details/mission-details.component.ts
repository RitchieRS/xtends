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
  dataMission: ReqMission;
  infoSondeo: AMission;

  missionsection3: MisionSection3;
  missionDetail: ContentMission;

  dataSondeo: any;


  constructor(
    private route: ActivatedRoute,
    private dataSondeoMissions: MissionService,
  ) {
    this.idPV = Number(this.route.snapshot.paramMap.get('idPV'));

   }

  ngOnInit() {
    const token = localStorage.getItem('token');
    const dataMission = {
      idPV: this.idPV
    };

    this.dataSondeoMissions.keepMissionInfo(dataMission);
    this.dataSondeoMissions.srvSondeoMission(dataMission,token)
    .subscribe( (res) => {
      if(res){
        this.infoSondeo = res;
        console.log(this.infoSondeo);
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
