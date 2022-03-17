import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mission, RespMission } from 'src/app/xmodels/missions';
import { MissionService } from 'src/app/xservices/mission/mission.service';

@Component({
  selector: 'app-mymissions',
  templateUrl: './mymissions.component.html',
  styleUrls: ['./mymissions.component.scss'],
})
export class MymissionsComponent implements OnInit {
  infMission: Mission;
  idPV: number;
  missionDetail: RespMission;
  puereMissionsActivas: any;
  puereMissionsComplite: any;

  constructor(
    private route: ActivatedRoute,
    private srvMission: MissionService,
    ) { }

  async ngOnInit() {
    await this.loadMissionTaken();
    const token = localStorage.getItem('token');

    this.srvMission.getMissionXuser(token)
    .subscribe( myMissionsAka => {
      console.log(myMissionsAka);
    });

    this.srvMission.getMissionXuser(token)
    .subscribe ( myMissionsActivas => {
    this.puereMissionsActivas = myMissionsActivas.section1.content.slice(0,4);
    console.log(this.puereMissionsActivas);
    });

    //Carga las my missions compleat
    this.srvMission.getMissionXuser(token)
    .subscribe ( myMissionsComplite => {
    this.puereMissionsComplite = myMissionsComplite.section2.content.slice(0,4);
    console.log(this.puereMissionsComplite);
    });
  }


  async loadMissionTaken(){
    const token = localStorage.getItem('token');
    const dataMission = {
      idPV: this.idPV
    };
    this.srvMission.keepMissionInfo(dataMission);
    await this.srvMission.getMissionXTiendaProyecto(dataMission,token).subscribe((res) =>{

      if(res){
        this.infMission = res;

        this.missionDetail  = this.infMission.resp;


        /* Misiones Activas*/
        if(this.infMission.resp.idTienda != undefined){

        }
      }
    });
  }

}
