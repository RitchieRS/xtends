import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Mission, RespMission, MisionSection3, ContentMission } from 'src/app/xmodels/missions';
import { MissionService } from 'src/app/xservices/mission/mission.service';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { element } from 'protractor';
import { clear } from 'console';


@Component({
  selector: 'app-mymissions',
  templateUrl: './mymissions.component.html',
  styleUrls: ['./mymissions.component.scss'],
})
export class MymissionsComponent implements OnInit {
  missionsFiltradas: any;
  putiMissiones: number;
  fecha: any;
  putaMadreconesto: any;
  reata: any;
  newArray: any []=[];

  missionscomplitedtc: FormGroup;
  submitted = false;
  fechaMiliseg: any;
  missionsArray: any[]=[];
  cliente: any;
  moonLanding: any;
  echaVerga: number;
  milsegDtc: number;

  infMisionMelleva: MisionSection3;
  infMission: Mission;
  idPV: number;
  missionDetail: RespMission;
  missionDetalleMelleva: any;
  puereMissionsActivas: any;
  puereMissionsArealizar: any;
  puereMissionsArealizarDtc: any;
  // puereMissionsComplite: any;
  puereMissionsComplite: any [] =  [];
  puereMissionsCompliteDtc: any;
  isLoaded=0;
  isLoadedArealizar=0;
  isLoadedComplite=0;
  currentIndex = 5;
  currentIndexTwo = 5;
  totalMissionsTwo: number;
  totalMissionsOne: number;
  dataFecha: any;
  siOnoHay: number;
  siOnoHayco: number;

  // dateRangePicker: any;
  // dateRangeStart: any;
  // dateRangeEnd: any;






  constructor(
    private route: ActivatedRoute,
    private srvMission: MissionService,
    private fb: FormBuilder
    ) {
      this.missionscomplitedtc = this.fb.group({
        startDate: ['',Validators.required],
        endDate: ['',Validators.required],
      });
    }





  async ngOnInit() {

    await this.loadMissionTaken();


    const token = localStorage.getItem('token');


    // this.srvMission.getMissionXuser(token)
    // .subscribe( myMissionsAka => {
    //   console.log(myMissionsAka);
    //  });


    //Carga las my missions Activas
    this.srvMission.getMissionXuser(token)
    .subscribe ( myMissionsActivas => {
    {
      this.puereMissionsActivas = myMissionsActivas.section1.content.slice(0,1);
       console.log(this.puereMissionsActivas);
       this.isLoaded=1;
       if(this.puereMissionsActivas === 'N'){
        // console.log('SFDHSDHDGSHFGHSFGHFGD');
        this.siOnoHay=0;
       }else{
        // console.log('412341342134231');
        this.siOnoHay=1;
       }
    }
    });

    //Carga las my missions a realizar
    this.srvMission.getMissionXuser(token)
    .subscribe ( myMissionsArealizar => {
    this.puereMissionsArealizar = myMissionsArealizar.section2.content;
    this.puereMissionsArealizarDtc = this.puereMissionsArealizar.slice(0,3);
    console.log(this.puereMissionsArealizar);
    this.isLoadedArealizar=1;
    this.totalMissionsOne = this.puereMissionsArealizar.length;
    if(this.puereMissionsArealizar === 'No hay misisones haciendo por el momento.'){
      this.siOnoHay=0;
    }else{
      this.siOnoHay=1;
    }
    });

    //Carga las my missionscompleat
    this.srvMission.getMissionXuser(token)
    .subscribe ( myMissionsComplite => {
    this.puereMissionsComplite = myMissionsComplite.section3.content;

    this.puereMissionsCompliteDtc = this.puereMissionsComplite.slice(0,4);
    console.log(this.puereMissionsComplite.length);
    console.log(this.puereMissionsCompliteDtc);
    this.isLoadedComplite=1;
    this.totalMissionsTwo = this.puereMissionsComplite.length;

    if(this.puereMissionsCompliteDtc === 'No h'){
      this.siOnoHayco=0;
    }else{
      this.siOnoHayco=1;
    }
    });

  }

  filterMissionsComplite(){
    this.submitted = true;
    if(this.missionscomplitedtc.invalid){
      return;
    }
    const missionsArray = this.puereMissionsComplite;

    const fechaInicialDPicker = this.missionscomplitedtc.value.startDate.getTime()-42366000;
    const fechaFinalDPicker = this.missionscomplitedtc.value.endDate.getTime()+42366000;
    console.log(fechaInicialDPicker-42366000, fechaFinalDPicker+42366000) ;

    const missionsEnRangod = putiMissiones =>
    putiMissiones.fechaUnix >= fechaInicialDPicker
    && putiMissiones.fechaUnix <= fechaFinalDPicker;

    const missionsFiltradas = missionsArray.filter(missionsEnRangod);
    console.log(missionsFiltradas);
    this.missionsFiltradas = missionsFiltradas;
  }

  returnTheFilter(){
    this.missionsFiltradas = 0;
    console.log(this.missionsFiltradas);
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
