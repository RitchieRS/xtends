import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mission, RespMission, MisionSection3, ContentMission } from 'src/app/xmodels/missions';
import { MissionService } from 'src/app/xservices/mission/mission.service';

@Component({
  selector: 'app-mymissions',
  templateUrl: './mymissions.component.html',
  styleUrls: ['./mymissions.component.scss'],
})
export class MymissionsComponent implements OnInit {
  infMisionMelleva: MisionSection3;
  infMission: Mission;
  idPV: number;
  missionDetail: RespMission;
  missionDetalleMelleva: any;
  puereMissionsActivas: any;
  puereMissionsArealizar: any;
  puereMissionsComplite: any;


  constructor(
    private route: ActivatedRoute,
    private srvMission: MissionService,
    ) { }

  async ngOnInit() {
    await this.loadMissionTaken();

    const token = localStorage.getItem('token');

    // this.srvMission.getMissionXuser(token)
    // .subscribe( myMissionsAka => {
    //   console.log(myMissionsAka);
    //  });


    //Carga las my missions disponibles
    this.srvMission.getMissionXuser(token)
    .subscribe ( myMissionsActivas => {
    this.puereMissionsActivas = myMissionsActivas.section1.content.slice(0,4);
    console.log(this.puereMissionsActivas);
    });

    //Carga las my missions a realizar
    this.srvMission.getMissionXuser(token)
    .subscribe ( myMissionsArealizar => {
    this.puereMissionsArealizar = myMissionsArealizar.section2.content;
    console.log(this.puereMissionsArealizar);
    });

    //Carga las my missions compleat
    this.srvMission.getMissionXuser(token)
    .subscribe ( myMissionsComplite => {
    this.puereMissionsComplite = myMissionsComplite.section3.content;
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


  // async loadMissionTakenTwo(){
  //   const token = localStorage.getItem('token');
  //   const dataMission = {
  //     idPV: this.idPV
  //   };
  //   this.srvMission.keepMissionInfo(dataMission);
  //   await this.srvMission.getValeChiles(dataMission,token).subscribe((res) =>{

  //     if(res){
  //       this.infMisionMelleva = res;

  //       this.missionDetalleMelleva = this.infMisionMelleva.content;
  //     }
  //   });
  // }

}
