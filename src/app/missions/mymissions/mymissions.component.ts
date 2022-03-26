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
  puereMissionsArealizarDtc: any;
  puereMissionsComplite: any;
  puereMissionsCompliteDtc: any;
  isLoaded=0;
  isLoadedArealizar=0;
  isLoadedComplite=0;
  currentIndex = 5;
  currentIndexTwo = 5;
  totalMissionsTwo: number;
  totalMissionsOne: number;



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
    {
      this.puereMissionsActivas = myMissionsActivas.section1.content.slice(0,1);
       console.log(this.puereMissionsActivas);
       this.isLoaded=1;

    }

    //   this.puereMissionsActivas = myMissionsActivas.section1.content.slice(0,1);
    // console.log(this.puereMissionsActivas);
    });

    //Carga las my missions a realizar
    this.srvMission.getMissionXuser(token)
    .subscribe ( myMissionsArealizar => {
    this.puereMissionsArealizar = myMissionsArealizar.section2.content;
    this.puereMissionsArealizarDtc = this.puereMissionsArealizar.slice(0,3);
    console.log(this.puereMissionsArealizar);
    this.isLoadedArealizar=1;
    this.totalMissionsOne = this.puereMissionsArealizar.length;
    });

    //Carga las my missions compleat
    this.srvMission.getMissionXuser(token)
    .subscribe ( myMissionsComplite => {
    this.puereMissionsComplite = myMissionsComplite.section3.content;
    this.puereMissionsCompliteDtc = this.puereMissionsComplite.slice(0,4);
    console.log(this.puereMissionsComplite.length);
    this.isLoadedComplite=1;
    this.totalMissionsTwo = this.puereMissionsComplite.length;
    });

  }

  seeMore(){
    this.currentIndex += 5;
    console.log(this.currentIndex);
    this.puereMissionsArealizarDtc = this.puereMissionsArealizar;
    this.puereMissionsArealizarDtc = this.puereMissionsArealizarDtc.slice(0,this.currentIndex);
  }

  seeMoreTwo(){
    this.currentIndexTwo += 5;
    console.log(this.currentIndexTwo);
    this.puereMissionsCompliteDtc = this.puereMissionsComplite;
    this.puereMissionsCompliteDtc = this.puereMissionsCompliteDtc.slice(0,this.currentIndexTwo);
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
