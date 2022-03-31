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
  putiMissiones: any;
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


    //Carga las my missions disponibles
    this.srvMission.getMissionXuser(token)
    .subscribe ( myMissionsActivas => {
    {
      this.puereMissionsActivas = myMissionsActivas.section1.content.slice(0,1);
       console.log(this.puereMissionsActivas);
       this.isLoaded=1;
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
    });

    //Carga las my missionscompleat
    this.srvMission.getMissionXuser(token)
    .subscribe ( myMissionsComplite => {
    this.puereMissionsComplite = myMissionsComplite.section3.content;

    this.puereMissionsCompliteDtc = this.puereMissionsComplite.slice(0,4);
    console.log(this.puereMissionsComplite.length);
    this.isLoadedComplite=1;
    this.totalMissionsTwo = this.puereMissionsComplite.length;

    });

  }

  filterMissionsComplite(){
    this.submitted = true;
    if(this.missionscomplitedtc.invalid){
      return;
    }
    const missionsArray = this.puereMissionsComplite;

    const fechaInicialDPicker = this.missionscomplitedtc.value.startDate.getTime();
    const fechaFinalDPicker = this.missionscomplitedtc.value.endDate.getTime();
    console.log(fechaInicialDPicker, fechaFinalDPicker) ;

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

  // filterMissionsComplite(){
  //   this.submitted = true;
  //   const missionsArray = this.puereMissionsComplite;

  //   const tranformFechas = missionsArray.map(reata => {
  //     const fechaVerga = new Date(reata.fecha);
  //     const milsegDtc = fechaVerga.getTime();
  //     return{
  //       cliente: reata.cliente,
  //       cadena: reata.cadena,
  //       proyecto: reata.pryecto,
  //       sucursal: reata.sucursal,
  //       idPV: reata.idPV,
  //       fecha: reata.fecha,
  //       fechUnix: milsegDtc,
  //     };
  //   });

  //   const lasMerasMissiones = tranformFechas;
  //   console.log(lasMerasMissiones);

  //   const fechaInicialDPicker = this.missionscomplite.value.StartDate.getTime();
  //   const fechaFinalDPicker = this.missionscomplite.value.EndDate.getTime();
  //   console.log(fechaInicialDPicker, fechaFinalDPicker) ;

  //   const missionsEnRangod = putiMissiones =>
  //   putiMissiones.fechUnix >= fechaInicialDPicker
  //   && putiMissiones.fechUnix <= fechaFinalDPicker;

  //   const missionsFiltradas = lasMerasMissiones.filter(missionsEnRangod);
  //   console.log(missionsFiltradas);
  //   this.missionsFiltradas = missionsFiltradas;
  // }


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
